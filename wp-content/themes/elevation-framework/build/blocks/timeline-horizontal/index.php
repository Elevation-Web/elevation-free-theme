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
function timeline_h_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

  // Create id attribute allowing for custom "anchor" value.
  $id = 'component__timeline-horizontal-' . $block['id'] . '-' . wp_unique_id();
  if (!empty($block['anchor'])) {
    $id = $block['anchor'];
  }

  // Create class attribute allowing for custom "className" and "align" values.
  $data_id = 'timeline-horizontal';
  $className = 'dynamic-assets-load component component__timeline-horizontal';
  if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
  }
  if (!empty($block['align'])) {
    $className .= ' align' . $block['align'];
  }

  // Load values and handle defaults.
  $carousel_items = get_field('timeline_carousel');
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

        <?php if ($timeline_editor) : ?>

          <div class="component__col col-xl-<?= esc_html($container_width); ?> col-12  offset-xl-<?= esc_html($offset_container_width); ?>">

            <div class="component__content <?= esc_html($content_alignment); ?>">

              <div class="component__editor component__editor--color-dark">
                <?= wp_kses_post($timeline_editor); ?>
              </div>

            </div>

          </div>

        <?php endif; ?>

        <div class="component__col col-xl-<?= esc_html($container_width); ?> col-12">

          <?php if (!empty($carousel_items)) : ?>

            <div class="swiper__timeline" id="swiper-<?= esc_attr($id); ?>">



              <div class="swiper__container--thumb">



                <div class="swiper-wrapper">
                  <?php foreach ($carousel_items as $card) : ?>
                    <div class="swiper-slide">
                      <span class="tooltip-date"><?= esc_html($card['date']); ?></span>
                      <span class="dot-date"></span>
                    </div>
                  <?php endforeach; ?>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>

              <div class="swiper__container--timeline">



                <div class="swiper-wrapper">
                  <?php foreach ($carousel_items as $card) : ?>
                    <article class="card swiper-slide">

                      <div class="card__header">

                        <?php if (isset($card['image']) && !empty($card['image'])) : ?>
                          <?= Helpers::global_image($card['image'], [
                            'echo' => false,
                            'class' => 'card__image card__image--hover-effect'
                          ]); ?>
                        <?php endif; ?>

                        <div class="card__body">

                          <?php if (isset($card['category']) && !empty($card['category'])) : ?>
                            <div class="card__body--flex"><span class="card__category"><?= esc_html($card['category']); ?></span></div>
                          <?php endif; ?>

                          <?php if (isset($card['title']) && !empty($card['title'])) : ?>
                            <h3 class="card__title h5"><?= esc_html($card['title']); ?></h3>
                          <?php endif; ?>

                          <div class="card__body--flex">
                            <?php if (isset($card['author']) && !empty($card['author'])) : ?>
                              <span class="card__author"><?= esc_html($card['author']); ?></span>
                            <?php endif; ?>
                            <?php if (isset($card['date_string']) && !empty($card['date_string'])) : ?>
                              <span class="card__date"><?= esc_html($card['date_string']); ?></span>
                            <?php endif; ?>
                          </div>

                          <?php if (isset($card['description']) && !empty($card['description'])) : ?>
                            <div class="card__excerpt line-clamp-4">
                              <p><?= wp_kses_post($card['description']); ?></p>
                            </div>
                          <?php endif; ?>

                          <?php if (isset($card['button']) && !empty($card['button'])) : ?>
                            <span class="card__button">
                              <?= Helpers::global_link($card['button']); ?>
                            </span>
                          <?php endif; ?>

                        </div>

                      </div>

                      <?php if (isset($card['social_network']) && !empty($card['social_network'])) : ?>

                        <div class="card__footer">
                          <div class="card__social-color">
                            <span class="label">Sare:</span>
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

                    </article>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>

          <?php endif; ?>

        </div>

      </div>

    </div>

  </div>

<?php
}
