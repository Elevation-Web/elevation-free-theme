<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;
use ElevationFramework\Lib\Admin\Menu\Load as Menu;

$menu_type = get_field('choose_type_menu', 'option');
if ($menu_type == 'mega-menu-type-1') {
  $menu_class = ' menu-style-1';
} elseif ($menu_type == 'mega-menu-type-2') {
  $menu_class = ' menu-style-2';
} elseif ($menu_type == 'mega-menu-type-3') {
  $menu_class = ' menu-style-3';
} elseif ($menu_type == 'mega-menu-type-4') {
  $menu_class = ' menu-style-4';
} elseif ($menu_type == 'mega-menu-type-5') {
  $menu_class = ' menu-style-5';
} elseif ($menu_type == 'mega-menu-type-6') {
  $menu_class = ' menu-style-6';
} else {
  $menu_class = ' ';
}

?>

<?php
$menu_items = Menu::mega_menu(3);
?>

<div class="mega-menu-container<?= esc_attr($menu_class); ?>">

  <?php foreach ($menu_items as $item) : ?>
    <?php if (isset($item['children']) && array_key_exists('ID', $item)) : ?>

      <?php $item_type = get_field('menu_item_type', $item['ID']); ?>

      <?php if ($item_type == "option_1" || $item_type == "option_2") : ?>

        <?php
        /* Option 1 - Default Row Distribution + Media */
        /* Option 2 - Sub-Nav Header + Column Distribution + Media */
        $description = get_field('description_depth_0', $item['ID']);
        $size_column = get_field('menu_block_size', $item['ID']);
        $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
        ?>

        <?php if ($menu_type == 'mega-menu-type-2') : ?>
          <div class="container">
          <?php endif; ?>

          <div class="mega-menu <?= $item_type; ?>" id="mega-menu-item-<?= $item['ID']; ?>">
            <div class="mega-menu__mobile">
              <span class="mega-menu__back">Back</span>
              <span class="mega-menu__parent"><?= $item['title']; ?></span>
              <button class="mega-menu__close" type="button" data-toggle="collapse" data-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="visually-hidden">Menu</span>
              </button>
            </div>
            <div class="mega-menu__wrapper">
              <div class="mega-menu__container container">
                <div class="mega-menu__row">

                  <?php if ($menu_type == 'mega-menu-type-1') : ?>
                    <div class="mega-menu__col col-info">
                      <?php if ($description) : ?>
                        <span class="mega-menu__description">
                          <?= $description; ?>
                        </span>
                      <?php endif; ?>
                      <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                        <?= $item['title']; ?>
                      </a>
                    </div>
                  <?php endif; ?>

                  <div class="mega-menu__col col inner-wrapper">

                    <?php if ($menu_type == 'mega-menu-type-6') : ?>
                      <div class="mega-menu__info--top">
                        <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                          <?= $item['title']; ?>
                        </a>
                      </div>
                    <?php endif; ?>

                    <ul class="mega-menu__nav<?= $item_type == 'option_2' ? ' sub-nav-header ' : ' '; ?><?= $menu_column_distribution ? ' column_size-' . esc_html($menu_column_distribution) : ' column_size-2'; ?>" role="menu">
                      <?php foreach ($item['children'] as $subitem) :
                        $current = ($subitem['object_id'] == get_queried_object_id()) ? ' active' : '';
                        $hasChildUl = !empty($subitem['children']);
                        $addClass = $hasChildUl ? ' sub-nav-header' : ' no-bold';
                      ?>
                        <li id="menu-item-<?= $subitem['ID']; ?>" class="mega-menu__item<?= $current; ?><?= $addClass; ?>">
                          <a href="<?= $subitem['url']; ?>" <?php if (isset($subitem['target'])) echo 'target="' . $subitem['target'] . '"'; ?>>

                            <?php if ($menu_type == 'mega-menu-type-5' || $menu_type == 'mega-menu-type-6') {
                              $icon_depth_1 = get_field('icon_depth_1', $subitem['ID']);
                              if ($icon_depth_1) :  ?>
                                <?php Helpers::global_image($icon_depth_1, ['is_figure' => false, 'class' => 'mega-menu__item-icon']); ?>
                            <?php endif;
                            } ?>

                            <?= $subitem['title']; ?>
                          </a>
                          <?php if ($hasChildUl) : ?>
                            <ul class="mega-menu__sub-childnav">
                              <?php
                              $numItems = count($subitem['children']);
                              foreach ($subitem['children'] as $key => $subsubitem) : ?>
                                <?php $current = ($subsubitem['object_id'] == get_queried_object_id()) ? ' active' : ''; ?>
                                <li id="menu-item-<?= $subsubitem['ID']; ?>" class="mega-menu__item<?= $current; ?>">
                                  <a href="<?= $subsubitem['url']; ?>">
                                    <?= $subsubitem['title']; ?>
                                  </a>
                                </li>
                              <?php endforeach; ?>
                            </ul>
                          <?php endif; ?>
                        </li>
                      <?php endforeach; ?>
                    </ul>

                    <?php if ($menu_type == 'mega-menu-type-2' || $menu_type == 'mega-menu-type-3') : ?>
                      <div class="mega-menu__info--bottom">
                        <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                          <?= $item['title']; ?>
                        </a>
                      </div>
                    <?php endif; ?>

                  </div>

                  <?php if (have_rows('media_box', $item['ID'])) : ?>
                    <aside class="box-aside mega-menu__col col-box-<?= $size_column ? esc_html($size_column) : '2'; ?>">
                      <?php while (have_rows('media_box', $item['ID'])) : the_row();
                        if (get_sub_field('image_box')) {
                          $image_box = get_sub_field('image_box');
                          $alt_image_box = sanitize_text_field(get_sub_field('image_box')['alt']);
                        } else {
                          $image_box = get_template_directory_uri() . '/src/assets/images/default.svg';
                          $alt_image_box = 'Default Image';
                        }
                        $mask_box = get_sub_field('mask_box');
                        $title_box = get_sub_field('title_box');
                        $cta_box = get_sub_field('cta_box');
                        if ($cta_box) {
                          $cta_box_url = $cta_box['url'];
                          $cta_box_title = $cta_box['title'];
                          $cta_box_target = $cta_box['target'] ? $cta_box['target'] : '_self';
                        }
                      ?>

                        <figure class="mega-menu__figure">
                          <?php if ($mask_box) : ?>
                            <span class="mega-menu__figure--mask"></span>
                          <?php endif; ?>
                          <?php Helpers::global_image($image_box, ['is_figure' => false, 'class' => '', 'alt' => $alt_image_box]); ?>
                          <?php if ($cta_box || $title_box) : ?>
                            <div class="mega-menu__figure--content">
                              <span class="title h4"><?= $title_box; ?></span>
                              <?php if ($cta_box) : ?>
                                <div class="block__buttons right">
                                  <a href="<?= esc_url($cta_box_url); ?>" target="<?= esc_attr($cta_box_target); ?>" class="cta cta--cta-light"><?= esc_html($cta_box_title); ?></a>
                                </div>
                              <?php endif; ?>
                            </div>
                          <?php endif; ?>
                        </figure>

                      <?php endwhile; ?>
                    </aside>
                  <?php endif; ?>

                </div>
              </div>

              <span class="rest-container"></span>
            </div>
          </div>

          <?php if ($menu_type == 'mega-menu-type-2') : ?>
          </div>
        <?php endif; ?>

      <?php elseif ($item_type == "option_3") : ?>

        <?php
        /* Option 3 - Sub-Nav + Blog Posts */
        $description = get_field('description_depth_0', $item['ID']);
        $size_column = get_field('menu_block_size', $item['ID']);
        $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
        ?>

        <?php if ($menu_type == 'mega-menu-type-2') : ?>
          <div class="container">
          <?php endif; ?>

          <div class="mega-menu <?= $item_type; ?>" id="mega-menu-item-<?= $item['ID']; ?>">
            <div class="mega-menu__mobile">
              <span class="mega-menu__back">Back</span>
              <span class="mega-menu__parent"><?= $item['title']; ?></span>
              <button class="mega-menu__close" type="button" data-toggle="collapse" data-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="mega-menu__wrapper">
              <div class="mega-menu__container container">

                <div class="mega-menu__row">

                  <?php if ($menu_type == 'mega-menu-type-1') : ?>
                    <div class="mega-menu__col col-info">
                      <?php if ($description) : ?>
                        <span class="mega-menu__description">
                          <?= $description; ?>
                        </span>
                      <?php endif; ?>
                      <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                        <?= $item['title']; ?>
                      </a>
                    </div>
                  <?php endif; ?>

                  <div class="mega-menu__col col inner-wrapper">

                    <?php if ($menu_type == 'mega-menu-type-6') : ?>
                      <div class="mega-menu__info--top">
                        <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                          <?= $item['title']; ?>
                        </a>
                      </div>
                    <?php endif; ?>

                    <div class="mega-menu__inner-row">

                      <div class="mega-menu__col col">

                        <ul class="mega-menu__nav sub-nav-header<?= $menu_column_distribution ? ' column_size-' . esc_html($menu_column_distribution) : ' column_size-1'; ?>" role="menu">
                          <?php foreach ($item['children'] as $subitem) :
                            $current = ($subitem['object_id'] == get_queried_object_id()) ? ' active' : '';
                            $hasChildUl = !empty($subitem['children']);
                            $addClass = $hasChildUl ? ' sub-nav-header' : ' no-bold';
                          ?>
                            <li id="menu-item-<?= $subitem['ID']; ?>" class="mega-menu__item<?= $current; ?><?= $addClass; ?>">
                              <a href="<?= $subitem['url']; ?>" <?php if (isset($subitem['target'])) echo 'target="' . $subitem['target'] . '"'; ?>>
                                <?= $subitem['title']; ?>
                              </a>
                              <?php if ($hasChildUl) : ?>
                                <ul class="mega-menu__sub-childnav">
                                  <?php
                                  $numItems = count($subitem['children']);
                                  foreach ($subitem['children'] as $key => $subsubitem) : ?>
                                    <?php $current = ($subsubitem['object_id'] == get_queried_object_id()) ? ' active' : ''; ?>
                                    <li id="menu-item-<?= $subsubitem['ID']; ?>" class="mega-menu__item<?= $current; ?>">
                                      <a href="<?= $subsubitem['url']; ?>">
                                        <?= $subsubitem['title']; ?>
                                      </a>
                                    </li>
                                  <?php endforeach; ?>
                                </ul>
                              <?php endif; ?>
                            </li>
                          <?php endforeach; ?>
                        </ul>

                      </div>

                      <?php
                      $posts_per_page = get_field('posts_per_page', $item['ID']);
                      $arg = array(
                        'post_type'           => 'post',
                        'posts_per_page'      => $posts_per_page,
                        'ignore_sticky_posts' => 1,
                        'post__not_in'        => get_option('sticky_posts'),
                        'orderby'             => 'date',
                        'order'               => 'DESC',
                      );

                      $the_query = new WP_Query($arg);
                      if ($the_query->have_posts()) : ?>
                        <div class="mega-menu__col-posts mega-menu__col col col-box-<?= $size_column ? esc_html($size_column) : '2'; ?>">
                          <div class="mega-menu__card-post row row-cols-xl-<?= $posts_per_page; ?> row-cols-1">
                            <?php while ($the_query->have_posts()) : $the_query->the_post();
                              $date = get_the_date('M d, Y');
                              $title = get_the_title(get_the_ID());
                              $categories = get_the_terms(get_the_ID(), 'category');
                              $tags = get_the_terms(get_the_ID(), 'post_tag');
                            ?>

                              <div class="col">
                                <article class="card">

                                  <div class="card__body">
                                    <a href="<?= get_permalink(); ?>">

                                      <?php if (isset($date) && !empty($date)) : ?>
                                        <span class="card__body__date h6">
                                          <?= esc_html($date); ?>
                                        </span>
                                      <?php endif; ?>

                                      <?php if (isset($title) && !empty($title)) : ?>
                                        <h2 class="card__body__title h6">
                                          <span><?= esc_html($title); ?></span>
                                        </h2>
                                      <?php endif; ?>

                                      <?php if (isset($categories) && !empty($categories)) : ?>
                                        <span class="card__body__category">
                                          <?php foreach ($categories as $category) : ?>
                                            <span><?= esc_html($category->name); ?></span>
                                          <?php endforeach; ?>
                                        </span>
                                      <?php endif; ?>

                                      <?php if (isset($tags) && !empty($tags)) : ?>
                                        <span class="card__body__tag">
                                          <?php foreach ($tags as $tag) : ?>
                                            <span><?= esc_html($tag->name); ?></span>
                                          <?php endforeach; ?>
                                        </span>
                                      <?php endif; ?>

                                    </a>

                                  </div>
                                </article>
                              </div>

                            <?php endwhile;
                            wp_reset_postdata(); ?>
                          </div>
                        </div>
                      <?php endif; ?>

                      <?php if ($menu_type == 'mega-menu-type-2' || $menu_type == 'mega-menu-type-3') : ?>
                        <div class="mega-menu__info--bottom">
                          <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                            <?= $item['title']; ?>
                          </a>
                        </div>
                      <?php endif; ?>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <?php if ($menu_type == 'mega-menu-type-2') : ?>
          </div>
        <?php endif; ?>

      <?php elseif ($item_type == "option_4") : ?>

        <?php
        /* Option 4 - Sub-Nav + Event Posts */
        $description = get_field('description_depth_0', $item['ID']);
        $size_column = get_field('menu_block_size', $item['ID']);
        $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
        ?>

        <?php if ($menu_type == 'mega-menu-type-2') : ?>
          <div class="container">
          <?php endif; ?>

          <div class="mega-menu <?= $item_type; ?>" id="mega-menu-item-<?= $item['ID']; ?>">
            <div class="mega-menu__mobile">
              <span class="mega-menu__back">Back</span>
              <span class="mega-menu__parent"><?= $item['title']; ?></span>
              <button class="mega-menu__close" type="button" data-toggle="collapse" data-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="mega-menu__wrapper">
              <div class="mega-menu__container container">
                <div class="mega-menu__row">

                  <?php if ($menu_type == 'mega-menu-type-1') : ?>
                    <div class="mega-menu__col col-info">
                      <?php if ($description) : ?>
                        <span class="mega-menu__description">
                          <?= $description; ?>
                        </span>
                      <?php endif; ?>
                      <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                        <?= $item['title']; ?>
                      </a>
                    </div>
                  <?php endif; ?>

                  <div class="mega-menu__col col inner-wrapper">

                    <?php if ($menu_type == 'mega-menu-type-6') : ?>
                      <div class="mega-menu__info--top">
                        <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                          <?= $item['title']; ?>
                        </a>
                      </div>
                    <?php endif; ?>

                    <div class="mega-menu__inner-row">

                      <div class="mega-menu__col col">

                        <ul class="mega-menu__nav sub-nav-header<?= $menu_column_distribution ? ' column_size-' . esc_html($menu_column_distribution) : ' column_size-1'; ?>" role="menu">
                          <?php foreach ($item['children'] as $subitem) :
                            $current = ($subitem['object_id'] == get_queried_object_id()) ? ' active' : '';
                            $hasChildUl = !empty($subitem['children']);
                            $addClass = $hasChildUl ? ' sub-nav-header' : ' no-bold';
                          ?>
                            <li id="menu-item-<?= $subitem['ID']; ?>" class="mega-menu__item<?= $current; ?><?= $addClass; ?>">
                              <a href="<?= $subitem['url']; ?>" <?php if (isset($subitem['target'])) echo 'target="' . $subitem['target'] . '"'; ?>>
                                <?= $subitem['title']; ?>
                              </a>
                              <?php if ($hasChildUl) : ?>
                                <ul class="mega-menu__sub-childnav">
                                  <?php
                                  $numItems = count($subitem['children']);
                                  foreach ($subitem['children'] as $key => $subsubitem) : ?>
                                    <?php $current = ($subsubitem['object_id'] == get_queried_object_id()) ? ' active' : ''; ?>
                                    <li id="menu-item-<?= $subsubitem['ID']; ?>" class="mega-menu__item<?= $current; ?>">
                                      <a href="<?= $subsubitem['url']; ?>">
                                        <?= $subsubitem['title']; ?>
                                      </a>
                                    </li>
                                  <?php endforeach; ?>
                                </ul>
                              <?php endif; ?>
                            </li>
                          <?php endforeach; ?>
                        </ul>

                      </div>

                      <?php
                      /* Event 1 Loop */
                      global $post;
                      $events_per_page = get_field('events_per_page', $item['ID']);

                      $events = tribe_get_events([
                        'posts_per_page' => $events_per_page,
                        'start_date'     => 'now',
                        //'featured'       => true,
                      ]);

                      if (count($events) > 0) : ?>
                        <div class="mega-menu__col-events mega-menu__col col col-box-<?= $size_column ? esc_html($size_column) : '2'; ?>">
                          <div class="mega-menu__card-event row row-cols-xl-<?= $events_per_page; ?> row-cols-1">

                            <?php
                            foreach ($events as $post) {
                              $start_weekday = tribe_get_start_date($post->ID, false, 'D');
                              $start_day = tribe_get_start_date($post->ID, false, 'j');
                              $location = tribe_get_venue($post->ID);
                              $permalink = get_the_permalink($post->ID);
                              $title = get_the_title($post->ID);
                              $description = get_the_excerpt($post->ID);
                              $categories = get_the_terms($post->ID, 'tribe_events_cat');

                              $start_date = tribe_get_start_date($post->ID, false, 'l M j');
                              $start_time = tribe_get_start_time($post->ID, false, 'g:i a');

                              $end_date = tribe_get_end_date($post->ID, false, 'l M j');
                              $end_time = tribe_get_end_time($post->ID, false, 'g:i a');

                              if ($start_date == $end_date) {
                                $end_date = '';
                              } else {
                                $end_date = tribe_get_end_date($post->ID, false, 'l M j') . ' @ ';
                              }
                            ?>

                              <div class="col">
                                <article class="card">
                                  <div class="card__body">
                                    <a href="<?= get_permalink(); ?>">

                                      <?php if (isset($start_date) && !empty($start_date)) : ?>
                                        <span class="card__body__date h6">
                                          <span><span class="bold"><?= esc_html($start_date) . '</span> ' . esc_html($start_time) . ' - ' . esc_html($end_date) . ' ' . esc_html($end_time); ?>
                                              <!-- <?php if (isset($location) && !empty($location)) : ?>
                                            | <?= esc_html($location); ?>
                                          <?php endif; ?> -->
                                            </span>
                                          </span>
                                        <?php endif; ?>

                                        <?php if (isset($title) && !empty($title)) : ?>
                                          <h2 class="card__body__title h6">
                                            <span><?= esc_html($title); ?></span>
                                          </h2>
                                        <?php endif; ?>

                                        <?php if (isset($categories) && !empty($categories)) : ?>
                                          <span class="card__body__category">
                                            <?php foreach ($categories as $category) : ?>
                                              <span><?= esc_html($category->name); ?></span>
                                            <?php endforeach; ?>
                                          </span>
                                        <?php endif; ?>

                                    </a>

                                  </div>
                                </article>
                              </div>

                          <?php
                            }
                            echo '</div></div>';
                          endif;
                          ?>

                          <?php if ($menu_type == 'mega-menu-type-2' || $menu_type == 'mega-menu-type-3') : ?>
                            <div class="mega-menu__info--bottom">
                              <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                                <?= $item['title']; ?>
                              </a>
                            </div>
                          <?php endif; ?>

                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>

              <?php if ($menu_type == 'mega-menu-type-2') : ?>
            </div>
          <?php endif; ?>

        <?php elseif ($item_type == "option_5") : ?>

          <?php
          /* Option 5 - Sub-Nav + Blog Posts w/image */
          $description = get_field('description_depth_0', $item['ID']);
          $size_column = get_field('menu_block_size', $item['ID']);
          $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
          ?>

          <?php if ($menu_type == 'mega-menu-type-2') : ?>
            <div class="container">
            <?php endif; ?>

            <div class="mega-menu <?= $item_type; ?>" id="mega-menu-item-<?= $item['ID']; ?>">
              <div class="mega-menu__mobile">
                <span class="mega-menu__back">Back</span>
                <span class="mega-menu__parent"><?= $item['title']; ?></span>
                <button class="mega-menu__close" type="button" data-toggle="collapse" data-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="mega-menu__wrapper">
                <div class="mega-menu__container container">
                  <div class="mega-menu__row">

                    <?php if ($menu_type == 'mega-menu-type-1') : ?>
                      <div class="mega-menu__col col-info">
                        <?php if ($description) : ?>
                          <span class="mega-menu__description">
                            <?= $description; ?>
                          </span>
                        <?php endif; ?>
                        <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                          <?= $item['title']; ?>
                        </a>
                      </div>
                    <?php endif; ?>

                    <div class="mega-menu__col col inner-wrapper">

                      <?php if ($menu_type == 'mega-menu-type-6') : ?>
                        <div class="mega-menu__info--top">
                          <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                            <?= $item['title']; ?>
                          </a>
                        </div>
                      <?php endif; ?>

                      <div class="mega-menu__inner-row">

                        <div class="mega-menu__col col">

                          <ul class="mega-menu__nav sub-nav-header<?= $menu_column_distribution ? ' column_size-' . esc_html($menu_column_distribution) : ' column_size-1'; ?>" role="menu">
                            <?php foreach ($item['children'] as $subitem) :
                              $current = ($subitem['object_id'] == get_queried_object_id()) ? ' active' : '';
                              $hasChildUl = !empty($subitem['children']);
                              $addClass = $hasChildUl ? ' sub-nav-header' : ' no-bold';
                            ?>
                              <li id="menu-item-<?= $subitem['ID']; ?>" class="mega-menu__item<?= $current; ?><?= $addClass; ?>">
                                <a href="<?= $subitem['url']; ?>" <?php if (isset($subitem['target'])) echo 'target="' . $subitem['target'] . '"'; ?>>
                                  <?= $subitem['title']; ?>
                                </a>
                                <?php if ($hasChildUl) : ?>
                                  <ul class="mega-menu__sub-childnav">
                                    <?php
                                    $numItems = count($subitem['children']);
                                    foreach ($subitem['children'] as $key => $subsubitem) : ?>
                                      <?php $current = ($subsubitem['object_id'] == get_queried_object_id()) ? ' active' : ''; ?>
                                      <li id="menu-item-<?= $subsubitem['ID']; ?>" class="mega-menu__item<?= $current; ?>">
                                        <a href="<?= $subsubitem['url']; ?>">
                                          <?= $subsubitem['title']; ?>
                                        </a>
                                      </li>
                                    <?php endforeach; ?>
                                  </ul>
                                <?php endif; ?>
                              </li>
                            <?php endforeach; ?>
                          </ul>

                        </div>

                        <?php
                        $posts_per_page = get_field('posts_per_page', $item['ID']);
                        $arg = array(
                          'post_type'           => 'post',
                          'posts_per_page'      => $posts_per_page,
                          'post__not_in'        => get_option('sticky_posts'),
                          'ignore_sticky_posts' => 1,
                          'orderby'             => 'date',
                          'order'               => 'DESC',
                        );

                        $the_query = new WP_Query($arg);
                        if ($the_query->have_posts()) : ?>
                          <div class="mega-menu__col-posts mega-menu__col col col-box-<?= $size_column ? esc_html($size_column) : '2'; ?>">
                            <div class="mega-menu__card-post row row-cols-xl-<?= $posts_per_page; ?> row-cols-1">
                              <?php while ($the_query->have_posts()) : $the_query->the_post();
                                $date = get_the_date('M d, Y');
                                $title = get_the_title(get_the_ID());
                                $categories = get_the_terms(get_the_ID(), 'category');
                                $tags = get_the_terms(get_the_ID(), 'post_tag');
                              ?>

                                <div class="col">
                                  <article class="card">
                                    <?php if (has_post_thumbnail()) :
                                      $image = get_post_thumbnail_id(get_the_ID());
                                      $alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
                                    ?>
                                      <div class="card__header">
                                        <?php Helpers::global_image($image, ['class' => 'card__image card__image--hover-effect', 'alt' => $alt_image, 'size' => 'medium']); ?>
                                      </div>
                                    <?php endif; ?>

                                    <div class="card__body">
                                      <a href="<?= get_permalink(); ?>">

                                        <?php if (isset($date) && !empty($date)) : ?>
                                          <span class="card__body__date h6">
                                            <?= esc_html($date); ?>
                                          </span>
                                        <?php endif; ?>

                                        <?php if (isset($title) && !empty($title)) : ?>
                                          <h2 class="card__body__title h6">
                                            <span><?= esc_html($title); ?></span>
                                          </h2>
                                        <?php endif; ?>

                                        <?php if (isset($categories) && !empty($categories)) : ?>
                                          <span class="card__body__category">
                                            <?php foreach ($categories as $category) : ?>
                                              <span><?= esc_html($category->name); ?></span>
                                            <?php endforeach; ?>
                                          </span>
                                        <?php endif; ?>

                                        <?php if (isset($tags) && !empty($tags)) : ?>
                                          <span class="card__body__tag">
                                            <?php foreach ($tags as $tag) : ?>
                                              <span><?= esc_html($tag->name); ?></span>
                                            <?php endforeach; ?>
                                          </span>
                                        <?php endif; ?>

                                      </a>

                                    </div>
                                  </article>
                                </div>

                              <?php endwhile;
                              wp_reset_postdata(); ?>
                            </div>
                          </div>
                        <?php endif; ?>

                        <?php if ($menu_type == 'mega-menu-type-2' || $menu_type == 'mega-menu-type-3') : ?>
                          <div class="mega-menu__info--bottom">
                            <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                              <?= $item['title']; ?>
                            </a>
                          </div>
                        <?php endif; ?>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <?php if ($menu_type == 'mega-menu-type-2') : ?>
            </div>
          <?php endif; ?>

        <?php elseif ($item_type == "option_6") : ?>

          <?php
          /* Option 6 - Sub-Nav + Event Posts w/image */
          $description = get_field('description_depth_0', $item['ID']);
          $size_column = get_field('menu_block_size', $item['ID']);
          $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
          ?>

          <?php if ($menu_type == 'mega-menu-type-2') : ?>
            <div class="container">
            <?php endif; ?>

            <div class="mega-menu <?= $item_type; ?>" id="mega-menu-item-<?= $item['ID']; ?>">
              <div class="mega-menu__mobile">
                <span class="mega-menu__back">Back</span>
                <span class="mega-menu__parent"><?= $item['title']; ?></span>
                <button class="mega-menu__close" type="button" data-toggle="collapse" data-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="mega-menu__wrapper">
                <div class="mega-menu__container container">
                  <div class="mega-menu__row">

                    <?php if ($menu_type == 'mega-menu-type-1') : ?>
                      <div class="mega-menu__col col-info">
                        <?php if ($description) : ?>
                          <span class="mega-menu__description">
                            <?= $description; ?>
                          </span>
                        <?php endif; ?>
                        <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                          <?= $item['title']; ?>
                        </a>
                      </div>
                    <?php endif; ?>

                    <div class="mega-menu__col col inner-wrapper">

                      <?php if ($menu_type == 'mega-menu-type-6') : ?>
                        <div class="mega-menu__info--top">
                          <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                            <?= $item['title']; ?>
                          </a>
                        </div>
                      <?php endif; ?>

                      <div class="mega-menu__inner-row">

                        <div class="mega-menu__col col">

                          <ul class="mega-menu__nav sub-nav-header<?= $menu_column_distribution ? ' column_size-' . esc_html($menu_column_distribution) : ' column_size-1'; ?>" role="menu">
                            <?php foreach ($item['children'] as $subitem) :
                              $current = ($subitem['object_id'] == get_queried_object_id()) ? ' active' : '';
                              $hasChildUl = !empty($subitem['children']);
                              $addClass = $hasChildUl ? ' sub-nav-header' : ' no-bold';
                            ?>
                              <li id="menu-item-<?= $subitem['ID']; ?>" class="mega-menu__item<?= $current; ?><?= $addClass; ?>">
                                <a href="<?= $subitem['url']; ?>" <?php if (isset($subitem['target'])) echo 'target="' . $subitem['target'] . '"'; ?>>
                                  <?= $subitem['title']; ?>
                                </a>
                                <?php if ($hasChildUl) : ?>
                                  <ul class="mega-menu__sub-childnav">
                                    <?php
                                    $numItems = count($subitem['children']);
                                    foreach ($subitem['children'] as $key => $subsubitem) : ?>
                                      <?php $current = ($subsubitem['object_id'] == get_queried_object_id()) ? ' active' : ''; ?>
                                      <li id="menu-item-<?= $subsubitem['ID']; ?>" class="mega-menu__item<?= $current; ?>">
                                        <a href="<?= $subsubitem['url']; ?>">
                                          <?= $subsubitem['title']; ?>
                                        </a>
                                      </li>
                                    <?php endforeach; ?>
                                  </ul>
                                <?php endif; ?>
                              </li>
                            <?php endforeach; ?>
                          </ul>

                        </div>

                        <?php
                        /* Event 1 Loop */
                        global $post;
                        $events_per_page = get_field('events_per_page', $item['ID']);

                        $events = tribe_get_events([
                          'posts_per_page' => $events_per_page,
                          'start_date'     => 'now',
                          //'featured'       => true,
                        ]);

                        if (count($events) > 0) : ?>
                          <div class="mega-menu__col-events mega-menu__col col col-box-<?= $size_column ? esc_html($size_column) : '2'; ?>">
                            <div class="mega-menu__card-event row row-cols-xl-<?= $events_per_page; ?> row-cols-1">
                              <?php
                              foreach ($events as $post) {
                                $start_weekday = tribe_get_start_date($post->ID, false, 'D');
                                $start_day = tribe_get_start_date($post->ID, false, 'j');
                                $location = tribe_get_venue($post->ID);
                                $permalink = get_the_permalink($post->ID);
                                $title = get_the_title($post->ID);
                                $description = get_the_excerpt($post->ID);
                                $categories = get_the_terms($post->ID, 'tribe_events_cat');

                                $start_date = tribe_get_start_date($post->ID, false, 'l M j');
                                $start_time = tribe_get_start_time($post->ID, false, 'g:i a');

                                $end_date = tribe_get_end_date($post->ID, false, 'l M j');
                                $end_time = tribe_get_end_time($post->ID, false, 'g:i a');

                                if ($start_date == $end_date) {
                                  $end_date = '';
                                } else {
                                  $end_date = tribe_get_end_date($post->ID, false, 'l M j') . ' @ ';
                                }
                              ?>

                                <div class="col">
                                  <article class="card">
                                    <?php
                                    if (tribe_event_featured_image($post->ID)) {
                                      $image = get_post_thumbnail_id($post->ID);
                                      $alt_image = get_post_meta($image, '_wp_attachment_image_alt', true);
                                    ?>
                                      <div class="card__header">
                                        <?php Helpers::global_image($image, ['class' => 'card__image card__image--hover-effect', 'alt' => $alt_image, 'size' => 'medium']); ?>
                                      </div>
                                    <?php } ?>

                                    <div class="card__body">
                                      <a href="<?= get_permalink(); ?>">

                                        <?php if (isset($start_date) && !empty($start_date)) : ?>
                                          <span class="card__body__date h6">
                                            <span><span class="bold"><?= esc_html($start_date) . '</span> ' . esc_html($start_time) . ' - ' . esc_html($end_date) . ' ' . esc_html($end_time); ?>
                                                <!-- <?php if (isset($location) && !empty($location)) : ?>
                                          | <?= esc_html($location); ?>
                                        <?php endif; ?> -->
                                              </span>
                                            </span>
                                          <?php endif; ?>

                                          <?php if (isset($title) && !empty($title)) : ?>
                                            <h2 class="card__body__title h6">
                                              <span><?= esc_html($title); ?></span>
                                            </h2>
                                          <?php endif; ?>

                                          <?php if (isset($categories) && !empty($categories)) : ?>
                                            <span class="card__body__category">
                                              <?php foreach ($categories as $category) : ?>
                                                <span><?= esc_html($category->name); ?></span>
                                              <?php endforeach; ?>
                                            </span>
                                          <?php endif; ?>

                                      </a>

                                    </div>

                                  </article>
                                </div>

                            <?php
                              }
                              echo '</div></div>';
                            endif;
                            ?>

                            <?php if ($menu_type == 'mega-menu-type-2' || $menu_type == 'mega-menu-type-3') : ?>
                              <div class="mega-menu__info--bottom">
                                <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                                  <?= $item['title']; ?>
                                </a>
                              </div>
                            <?php endif; ?>

                            </div>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>

                <?php if ($menu_type == 'mega-menu-type-2') : ?>
              </div>
            <?php endif; ?>

          <?php elseif ($item_type == "none") : ?>

          <?php endif; ?>

        <?php endif; ?>
      <?php endforeach; ?>

            </div>