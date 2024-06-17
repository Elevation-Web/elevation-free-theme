<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$menu_class = ' menu-style-2';
$menu_items = elevationMegaMenu('Menu 2 - Contained + Media');
?>

<div class="mega-menu-container<?= esc_attr($menu_class); ?>">

  <?php foreach ($menu_items as $item) : ?>
    <?php if (isset($item['children']) && array_key_exists('ID', $item)) : ?>

      <?php
      $item_type = get_field('menu_item_type', $item['ID']);
      $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
      ?>

      <div class="container">

        <div class="mega-menu" id="mega-menu-item-<?= $item['ID']; ?>">
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

                <div class="mega-menu__col col inner-wrapper">

                  <ul class="mega-menu__nav<?= $item_type == 'option_1' ? ' sub-nav-header' : ' '; ?><?= ' column_size-' . esc_html($menu_column_distribution); ?>" role="menu">
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

                  <div class="mega-menu__info--bottom">
                    <a href="<?= $item['url']; ?>" class="cta cta--simple-dark-arrow-left" <?php if (isset($item['target'])) echo 'target="' . $item['target'] . '"'; ?>>
                      <?= $item['title']; ?>
                    </a>
                  </div>

                </div>

                <?php if (have_rows('media_box', $item['ID'])) : ?>
                  <aside class="box-aside mega-menu__col col-box-4">
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
                        <?php Helpers::global_image($image_box, ['is_figure' => false, 'class' => 'card__image card__image--hover-effect', 'alt' => $alt_image_box, 'size' => 'hd']); ?>
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

      </div>

    <?php endif; ?>
  <?php endforeach; ?>

</div>