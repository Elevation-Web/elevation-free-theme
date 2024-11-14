<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$imgId = 0;

if (isset($attributes['img']['id']) || isset($attributes['img']['url'])) :
    $imgId = isset($attributes['img']['id']) ? $attributes['img']['id'] : site_url() . $attributes['img']['url'];
    $imgInheritClassName = '';
    $loading = $attributes['isLazy'] ? 'lazy' : 'eager';
    $image_data = Helpers::global_data_image($imgId, 'full');

    if (isset($attributes['className'])) {
        $imgInheritClassName .= $attributes['className'];
    }

    if (isset($attributes['inheritClassName'])) {
        $imgInheritClassName .= ($imgInheritClassName ? ' ' : '') . $attributes['inheritClassName'];
    }

    echo '<div class="image-gallery" data-image="' . $image_data['image'] . '">';
    if (isset($attributes['link']['url']) && $attributes['link']['url'] !== '') :
        $target = $attributes['link']['target'] ? 'target="_blank"  rel="noopener noreferrer"' : '';
        echo '<a href="' . $attributes['link']['url'] . '" class="' . $imgInheritClassName . '"' . $target . '>';
        Helpers::global_image($imgId, ['is_figure' => false, 'loading' => $loading, 'size' => 'thumbnail']);
        Helpers::global_caption($imgId);
        echo '</a>';
    else :
        Helpers::global_image($imgId, ['class' => $imgInheritClassName, 'is_figure' => false, 'loading' => $loading]);
        echo '<span class="media-caption">' .  $attributes['img']['caption']  . '</span>';
    endif;

    if ($image_data['alt'] != '') {
        echo '<button class="stretched-link image-gallery__link">' . $image_data['alt']  . '</button></div>';
    } else {
        echo '<button class="stretched-link image-gallery__link">' . $attributes['img']['caption']  . '</button></div>';
    }
endif;
