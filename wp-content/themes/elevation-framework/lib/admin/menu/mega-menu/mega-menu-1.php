<?php
$menu_class = ' menu-style-1';
$menu_items = elevationMegaMenu('Menu 1 - Default + Main Nav Description');
?>

<div class="mega-menu-container<?= esc_attr($menu_class); ?>">

  <?php foreach ($menu_items as $item) : ?>
    <?php if (isset($item['children']) && array_key_exists('ID', $item)) : ?>

      <?php
      /* option_1 : Default Row Distribution */
      /* option_2 : Sub-Nav Header + Column Distribution */
      $item_type   = get_field('menu_item_type', $item['ID']);
      $description = get_field('description_depth_0', $item['ID']);
      $menu_column_distribution = get_field('menu_column_distribution', $item['ID']);
      ?>

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

              <div class="mega-menu__col col inner-wrapper">

                <ul class="mega-menu__nav<?= $item_type == 'option_2' ? ' sub-nav-header' : ' '; ?><?= $menu_column_distribution ? ' column_size-' . esc_html($menu_column_distribution) : ' column_size-2'; ?>" role="menu">
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

            </div>
          </div>
          <span class="rest-container"></span>
        </div>
      </div>

    <?php endif; ?>
  <?php endforeach; ?>

</div>