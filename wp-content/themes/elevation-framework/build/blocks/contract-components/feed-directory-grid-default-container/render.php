<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$headingLevel = $attributes['headingLevel'] ?? 'h4';
$categorySelected = $attributes['categorySelected'] ?? [];
$postsPerPage = $attributes['postsPerPage'] ?? -1;
$filterEnabled = $attributes['filterEnabled'] ?? true;
$cardDirectory = $attributes['cardDirectory'] ?? true;
$titleDirectory = $attributes['titleDirectory'] ?? 'Title Page (Directory)';
$urlDirectory = $attributes['urlDirectory'] ?? '/directory';
$textDirectory = $attributes['textDirectory'] ?? 'See more from';
$postType = $attributes['postType'] ?? 'resources';
$taxonomy = $attributes['taxonomy'] ?? 'resources_categories';
$postExclude = $attributes['postExclude'] ?? [];
$showDate = $attributes['showDate'] ?? false;
$withBorder = $attributes['withBorder'] ?? false;
?>
<div id="<?php echo esc_attr($attributes['id']); ?>" data-block-id="contract-components/feed-directory-grid-default-container" data-block-js="true" class="feed-directory-grid-default-container">
    <div class="feed-directory-grid-default-container__container">
        <?php
        $args = array(
            'post_type'           => $postType,
            'posts_per_page'      => $postsPerPage,
            'post_status'         => 'publish',
            'orderby'             => 'date',
            'order'               => 'ASC',
            'post__not_in'        => $postExclude,
        );

        if ($filterEnabled &&  $categorySelected) {
            $cats = array_map(function ($cat) {
                return $cat['id'];
            }, $categorySelected);
            $args['tax_query'] = [
                [
                    'taxonomy' => $taxonomy, // Taxonomía de categorías de eventos
                    'field'    => 'term_id',         // Filtrar por ID de término
                    'terms'    => $cats,             // IDs de las categorías seleccionadas
                    'operator' => 'IN',              // Incluir términos coincidentes
                ],
            ];
        }

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
                <article class="card<?php echo !$cardDirectory ? ' full-width' : '';
                                    echo $withBorder ? ' card--border' : ''; ?>">
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
                        <?php if ($showDate) : ?>
                            <time datetime="<?php echo get_the_date('Y-m-d'); ?>" class="card__date has-small-labels-font-size">
                                <?php echo get_the_date('F j, Y'); ?>
                            </time>
                        <?php endif; ?>
                        <?php if (isset($title) && !empty($title)) : ?>
                            <<?php echo $headingLevel; ?> class="card__title no-animate">
                                <a href="<?= esc_url($permalink); ?>" target="_self" class="wp-block-heading"><?= esc_html($title); ?></a>
                            </<?php echo $headingLevel; ?>>
                        <?php endif; ?>
                        <div class="card__categories">
                            <?php if (!empty($categories)) : ?>
                                <?php foreach ($categories as $category) : ?>
                                    <?php if (isset($category) && !empty($category)) : ?>
                                        <div class="card__category">
                                            <span class="category">
                                                <?php echo $category->name; ?>
                                            </span>
                                        </div>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </aside>
                    <a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">View <?= esc_html($title) ?></a>
                </article>
        <?php
                wp_reset_postdata();
            endwhile;
        endif;
        ?>
        <?php if ($cardDirectory) : ?>
            <div class="card card-directory">
                <?php if ($textDirectory && $textDirectory != '') : ?>
                    <span class="text">
                        <?= esc_html($textDirectory); ?>
                    </span>
                <?php endif; ?>
                <?php if ($titleDirectory && $titleDirectory != '') : ?>
                    <h6><?= esc_html($titleDirectory); ?></h6>
                <?php endif; ?>
                <a href="<?= esc_url($urlDirectory); ?>" target="_self" class="stretched-link stretched-link-custom">View <?= esc_html($titleDirectory) ?></a>
            </div>
        <?php endif; ?>
    </div>
</div>