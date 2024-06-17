<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * What Make Us Different Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function timeline_v_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

  // Create id attribute allowing for custom "anchor" value.
  $id = 'component__timeline-vertical--' . $block['id'] . '-' . wp_unique_id();
  if (!empty($block['anchor'])) {
    $id = $block['anchor'];
  }
  // Create class attribute allowing for custom "className" and "align" values.
  $data_id = 'timeline-vertical';
  $className = 'dynamic-assets-load component component__timeline-vertical';
  if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
  }
  if (!empty($block['align'])) {
    $className .= ' align' . $block['align'];
  }

  // Load values and handle defaults.
  $vertical_items = get_field('timeline_vertical');
  $timeline_editor = get_field('timeline_editor');

  // settings
  $content_alignment = get_field('content_alignment');
  $container_alignment = get_field('container_alignment');
  $container_width = get_field('container_width');
  $offset_container_width = get_field('offset_container_width');
  if (get_field('padding_disable')) {
    if (!get_field('padding_top')) {
      $pd_top = ' pt-0 ';
    } else {
      $pd_top = '';
    }
    if (!get_field('padding_bottom')) {
      $pd_bottom = ' pb-0 ';
    } else {
      $pd_bottom = '';
    }
  } else {
    $pd_top = '';
    $pd_bottom = '';
  }

?>

  <div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className) . esc_attr($pd_top) . esc_attr($pd_bottom); ?>">

    <div class="component__container container">

      <div class="component__row row row-gap-50 justify-content-<?= esc_html($container_alignment); ?>">

        <div class="component__col col-xl-<?= esc_html($container_width); ?> col-12  offset-xl-<?= esc_html($offset_container_width); ?>">

          <div class="component__content <?= esc_html($content_alignment); ?>">

            <div class="component__editor component__editor--color-dark">
              <?= wp_kses_post($timeline_editor); ?>
            </div>

          </div>

        </div>

        <div class="component__col col-xl-10 col-12">

          <?php if ($vertical_items) : ?>

            <div class="component__timeline component__timeline-vertical">

              <?php foreach ($vertical_items as $item) : ?>

                <?php if (isset($item['year']) && !empty($item['year'])) : ?>
                  <span class="component__timeline-vertical--year"><?= esc_html($item['year']); ?></span>
                <?php endif; ?>

                <div class="component__timeline-vertical--group">

                  <?php if (isset($item['cards']) && !empty($item['cards'])) : ?>

                    <?php foreach ($item['cards'] as $card) : ?>

                      <article class="card">

                        <?php if (isset($card['link']) && !empty($card['link'])) : ?>

                          <a href="<?= esc_url($card['link']['url']); ?>" target="<?= esc_attr($card['link']['target']); ?>">

                          <?php endif; ?>

                          <?php if (isset($card['image']) && !empty($card['image'])) : ?>

                            <div class="card__header">

                              <?= Helpers::global_image($card['image'], [
                                'echo' => false,
                                'class' => 'card__image card__image--hover-effect'
                              ]); ?>

                              <?php if (isset($card['category']) && !empty($card['category'])) : ?>
                                <span class="card__category"><?= esc_html($card['category']); ?></span>
                              <?php endif; ?>

                            </div>

                          <?php endif; ?>

                          <div class="card__body">

                            <?php if (isset($card['title']) && !empty($card['title'])) : ?>
                              <h3 class="card__title h5"><?= esc_html($card['title']); ?></h3>
                            <?php endif; ?>

                            <div class="card__body--flex">

                              <?php if (isset($card['author']) && !empty($card['author'])) : ?>
                                <span class="card_author"><?= esc_html($card['author']); ?></span>
                              <?php endif; ?>

                              <?php if (isset($card['date']) && !empty($card['date'])) : ?>
                                <span class="card_date"><?= esc_html($card['date']); ?></span>
                              <?php endif; ?>

                            </div>

                            <?php if (isset($card['description']) && !empty($card['description'])) : ?>
                              <div class="card__excerpt line-clamp-4">
                                <p><?= wp_kses_post($card['description']); ?></p>
                              </div>
                            <?php endif; ?>

                          </div>

                          <?php if (isset($card['social_network']) && !empty($card['social_network'])) : ?>

                            <div class="card__footer">
                              <div class="card__social">
                                <ul class="social-network">
                                  <?php foreach ($card['social_network'] as $social) : ?>
                                    <?php if (isset($social['url']) && !empty($social['url']) || isset($social['email']) && !empty($social['email'])) : ?>
                                      <li>
                                        <?php if (isset($social['email']) && !empty($social['email'])) : ?>
                                          <a href="mailto:<?= esc_html($social['email']); ?>" target="_blank" class="dark-icon" rel="noopener noreferrer">
                                          <?php else : ?>
                                            <a href="<?= esc_html($social['url']); ?>" target="_blank" class="dark-icon" rel="noopener noreferrer">
                                            <?php endif; ?>
                                            <span class="icon--<?= esc_html($social['icon']); ?>"></span>
                                            <span class="visually-hidden"><?= esc_html($social['icon']); ?></span>
                                            </a>
                                      </li>
                                    <?php endif; ?>
                                  <?php endforeach; ?>
                                </ul>
                              </div>
                            </div>

                          <?php endif; ?>

                          <?php if (isset($card['link']) && !empty($card['link'])) : ?>

                          </a>

                        <?php endif; ?>

                      </article>

                    <?php endforeach; ?>

                  <?php endif; ?>

                </div>

              <?php endforeach; ?>

            </div>

          <?php endif; ?>

        </div>

      </div>

    </div>

  </div>

<?php
}
