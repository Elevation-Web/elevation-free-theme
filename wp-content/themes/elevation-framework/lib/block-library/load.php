<?php

namespace  ElevationFramework\Lib\BlockLibrary;

use ElevationFramework\Lib\BlockLibrary\Controls\ACF;

class Load
{
    protected static $_instance;

    public $block_dir = ELEVATION_THEME_DIR . '/build/blocks/';

    public function __construct()
    {
        ACF::instance();
        Helpers::instance();
        add_filter('should_load_separate_core_block_assets', '__return_true');
        add_filter('styles_inline_size_limit', '__return_zero');
        add_action('init', [$this, 'load_blocks'], 10);
        add_filter('block_categories_all', [$this, 'block_categories'], 10, 2);
        if (is_admin()) {
            add_action('admin_menu', [$this, 'block_count_add_page']);
        }
    }

    public function get_blocks()
    {
        $block_path = get_template_directory() . '/build/blocks/';

        // Get a list of all subdirectories in the blocks directory
        $directories = glob($block_path . '*/*', GLOB_ONLYDIR);

        // Filter out excluded blocks
        $filtered_blocks = $this->exclude_blocks($directories);

        return $filtered_blocks;
    }

    public function load_blocks()
    {
        $directories = $this->get_blocks();

        foreach ($directories as $dir) {
            // Check if block.json file exists in block directory
            if (file_exists($dir . '/' . 'block.json')) {
                // Register block
                register_block_type($dir);
            }
        }
    }

    public function block_categories($categories)
    {

        // Check to see if we already have a elevation category
        $include = true;
        foreach ($categories as $category) {
            if ('elevation' === $category['slug']) {
                $include = false;
            }
        }

        if ($include) {
            $categories = array_merge(
                [
                    [
                        'slug'  => 'elevation-blocks',
                        'title' => 'Elevation Blocks'
                    ]
                ],
                $categories
            );
        }

        return $categories;
    }


    public function getExcludedFolders($filePath)
    {
        // Read the JavaScript file
        $content = file_get_contents($filePath);

        // Extract the `blocks` object content
        if (preg_match('/const\s+blocks\s*=\s*({.*?});/s', $content, $blocksMatch)) {
            $blocksJson = trim($blocksMatch[1]);

            // Convert JavaScript object syntax to JSON format
            $blocksJson = preg_replace('/(\w+):/', '"$1":', $blocksJson); // Fix unquoted keys
            $blocksJson = str_replace(["'", "\n"], ['"', ''], $blocksJson); // Convert single quotes to double quotes & remove newlines
            $blocksJson = preg_replace('/,\s*}/', '}', $blocksJson); // Remove trailing commas before closing braces
            $blocksJson = preg_replace('/,\s*\]/', ']', $blocksJson); // Remove trailing commas before closing brackets

            // Decode JSON to PHP associative array
            $blocks = json_decode($blocksJson, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                die("JSON Decode Error: " . json_last_error_msg());
            }
        } else {
            die("Blocks object not found");
        }

        function getUncommentedExclusions($filePath)
        {
            $content = file_get_contents($filePath);

            // Remove multi-line comments (/* ... */)
            $content = preg_replace('#/\*.*?\*/#s', '', $content);

            // Extract the `exclude` array content
            if (preg_match('/const\s+exclude\s*=\s*\[(.*?)\];/s', $content, $excludeMatch)) {
                $excludeContent = $excludeMatch[1];

                // Split by lines
                $lines = explode("\n", $excludeContent);
                $excludeArray = [];

                foreach ($lines as $line) {
                    $trimmed = trim($line);

                    // Ignore single-line comments (// ...)
                    if (str_starts_with($trimmed, "//")) {
                        continue;
                    }

                    // Extract only valid JS object references (e.g., blocks.contractComponents.accordion,)
                    if (preg_match('/blocks\.[a-zA-Z0-9_.]+/', $trimmed, $matches)) {
                        $excludeArray[] = rtrim($matches[0], ','); // Remove trailing comma
                    }
                }

                return $excludeArray;
            } else {
                die("Exclude array not found");
            }
        }


        // Extract the `exclude` array content

        $excludeArray = getUncommentedExclusions($filePath);

        // Function to resolve JS references (like blocks.contractComponents.accordion)
        function resolveReference($reference, $blocks)
        {
            $keys = explode(".", $reference);
            array_shift($keys); // Remove "blocks"

            $current = $blocks;
            foreach ($keys as $key) {
                if (isset($current[$key])) {
                    $current = $current[$key];
                } else {
                    return []; // Return empty if the path doesn't exist
                }
            }

            // Ensure we always return a flat array of strings
            if (is_array($current)) {
                return array_values(array_unique(flattenArray($current)));
            }

            return [$current];
        }

        // Helper function to flatten an array recursively
        function flattenArray($array)
        {
            $result = [];
            array_walk_recursive($array, function ($item) use (&$result) {
                if (is_string($item)) {
                    $result[] = $item;
                }
            });
            return $result;
        }

        $resolvedFolders = [];
        foreach ($excludeArray as $reference) {
            $resolvedFolders = array_merge($resolvedFolders, resolveReference($reference, $blocks));
        }

        return array_values(array_unique($resolvedFolders)); // Remove duplicates and re-index
    }


    public function exclude_blocks($blocks)
    {
        $filePath = get_template_directory() . "/dev/cleanBlocks.mjs"; // Update with the correct file path
        $blocks_to_excluded = $this->getExcludedFolders($filePath);

        if ($blocks_to_excluded !== null && is_array($blocks_to_excluded)) {
            // Function to check if a string ends with another string (for PHP < 8)
            function endsWith($haystack, $needle)
            {
                return substr($haystack, -strlen($needle)) === $needle;
            }

            // Filter out paths that end with any of the removePaths
            $filteredPaths = array_filter($blocks, function ($path) use ($blocks_to_excluded) {
                foreach ($blocks_to_excluded as $remove) {
                    if (endsWith($path, $remove)) {
                        return false;
                    }
                }
                return true;
            });

            // Re-index array to maintain numeric keys
            $filteredPaths = array_values($filteredPaths);

            return $filteredPaths;
        }


        return $blocks;
    }

    public function block_count_add_page()
    {
        add_options_page('Gutenberg Block Count', 'Block Count', 'manage_options', 'block_count', [$this, 'block_count_page']);
    }

    public function block_count_page()
    {
?>
        <div>
            <h2>Gutenberg Block Count</h2>
            <?php $this->count_blocks(); ?>
        </div>

<?php
    }


    public function count_blocks()
    {
        $allPosts       = get_posts(array('posts_per_page' => -1, 'post_type' => 'any', 'fields' => 'ids'));
        $blockCount     = [];
        $totalBlocks    = [];

        foreach ($allPosts as $singlePostID) {
            $name       = get_the_title($singlePostID);
            $type       = get_post_type($singlePostID);
            $content    = get_post_field('post_content', $singlePostID);
            $blocks     = has_blocks($content) ? parse_blocks($content) : false;
            $permalink  = get_permalink($singlePostID);

            $postBlocks = [];
            if ($blocks) {
                foreach ($blocks as $block) {
                    $blockName = $block['blockName'];
                    if (!empty($blockName)) {
                        if (array_key_exists($blockName, $postBlocks)) {
                            $postBlocks[$blockName]++;
                        } else {
                            $postBlocks[$blockName] = 1;
                        }
                        if (array_key_exists($blockName, $totalBlocks)) {
                            $totalBlocks[$blockName]++;
                        } else {
                            $totalBlocks[$blockName] = 1;
                        }
                    }
                }
            }

            $blockCount[] = [
                'name'      => $name,
                'type'      => $type,
                'page'      => $permalink,
                'blocks'    => $postBlocks
            ];
        }

        foreach ($blockCount as $item) {
            $emptyPage = count($item['blocks']) == 0 ? true : false;
            if ($emptyPage) {
                echo '<span style="opacity:0.5">';
            }
            echo '<a href="' . $item['page'] . '"><b>' . $item['name'] . '</b></a> (<i>' . $item['type'] . '</i>) - ';
            if ($emptyPage) {
                echo 'NONE';
            }
            if ($emptyPage) {
                echo '</span>';
            }
            foreach ($item['blocks'] as $blockName => $blockCount) {
                echo '[ ' . $blockName . ' : ' . $blockCount . ' ] ';
            }
            echo '<br>';
        }

        echo '<h2>Totals</h2>';
        foreach ($totalBlocks as $blockName => $blockCount) {
            echo '[ ' . $blockName . ' : ' . $blockCount . ' ]<br>';
        }
    }


    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
