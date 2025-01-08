<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$headingLevel = $attributes['headingLevel'] ?? 'h4';
$postsPerPage = -1;
$taxonomy = $attributes['taxonomy'] ?? 'team_categories';
$postExclude = $attributes['postExclude'] ?? [];
$selectedTeams = $attributes['selectedTeams'] ?? [];
?>
<div id="<?php echo esc_attr($attributes['id']); ?>" data-block-id="contract-components/feed-directory-grid-default-container" data-block-js="true" class="feed-directory-grid-default-container">
    <div class="feed-directory-grid-default-container__container">
        <?php

        $selectedIds = array_map(function ($test) {
            return $test['id'];
        }, $selectedTeams);


        $args = array(
            'post_type'           => 'team',
            'posts_per_page'      => $postsPerPage,
            'post_status'         => 'publish',
            'orderby'             => 'date',
            'order'               => 'ASC',
            'post__in'        => $selectedIds,
        );

        error_log('args: ' . json_encode($args, JSON_PRETTY_PRINT));

        $the_query = new \WP_Query($args);
        $total_post = $the_query->found_posts;

        if ($the_query->have_posts()) :
            while ($the_query->have_posts()) : $the_query->the_post();
                $permalink = get_permalink(get_the_ID());
                $title = get_the_title(get_the_ID());
                $categories = get_the_terms(get_the_ID(), $taxonomy);
                if (has_post_thumbnail()) {
                    $image = get_post_thumbnail_id(get_the_ID());
                    $alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
                } else {
                    $image = get_template_directory_uri() . '/src/assets/images/default.svg';
                    $alt_image = 'default image';
                }
        ?>
                <article class="card">
                    <div class="card__image">
                        <?= Helpers::global_image(
                            $image,
                            [
                                'is_figure' => false,
                                'size' => 'medium',
                                'alt' => $alt_image,
                                'echo' => false,
                                'class' => 'no-animate card__image'
                            ]
                        ); ?>
                    </div>
                    <aside class="card__body">
                        <?php if (isset($title) && !empty($title)) : ?>
                            <<?php echo $headingLevel; ?> class="card__title no-animate">
                                <a href="<?= esc_url($permalink); ?>" target="_self" class="wp-block-heading"><?= esc_html($title); ?></a>
                            </<?php echo $headingLevel; ?>>
                        <?php endif; ?>
                        <div class="card__categories">
                            <?php foreach ($categories as $category) : ?>
                                <?php if (isset($category) && !empty($category)) : ?>
                                    <div class="card__category">
                                        <span class="category">
                                            <?php echo $category->name; ?>
                                        </span>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    </aside>
                    <a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">View <?= esc_html($title) ?></a>
                </article>
        <?php
                wp_reset_postdata();
            endwhile;
        endif;
        ?>
    </div>
</div>