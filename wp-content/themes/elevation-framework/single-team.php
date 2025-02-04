<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package elevation
 */

use ElevationFramework\Lib\BlockLibrary\Helpers;

global $id;

get_header();

// $categories = get_the_terms($id, 'team_categories');

$permalink = get_permalink(get_the_ID());
$title = get_the_title(get_the_ID());
$position = get_field('position', get_the_ID());
$content  = get_the_content();
$email = get_field('email', get_the_ID());
$social_network = get_field('social_network', get_the_ID());

if (has_post_thumbnail()) {
  $image = get_post_thumbnail_id(get_the_ID());
  $alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
} else {
  $image = get_template_directory_uri() . '/src/assets/images/default.svg';
  $alt_image = 'default image';
}
?>

<main id="primary" class="site-main container">
  <?php
  while (have_posts()) :
    the_post();
  ?>

    <div class="team-bios-modal">
      <div class="team-bios-modal__left">
        <div class="team-bios-modal__image">
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
        <?php if ($position || $email || !empty($social_network)) : ?>
          <div class="info-wrapper">
            <?php if ($position) : ?>
              <div class="info-wrapper__contact">
                <span class="info-wrapper__title">Current Appointments</span>
                <span class="info-wrapper__position"><?= esc_html($position); ?></span>
              </div>
            <?php endif; ?>
            <?php if ($email || !empty($social_network)) : ?>
              <div class="info-wrapper__contact">
                <span class="info-wrapper__title">Contact Information</span>
                <?php if ($email) : ?>
                  <a href="mailto:<?= esc_html($email); ?>" class="email"><?= esc_html($email); ?></a>
                <?php endif; ?>
                <?php if (!empty($social_network)) : ?>
                  <ul class="social-networks">
                    <?php foreach ($social_network as $social): ?>
                      <?php if (isset($social['url']) && !empty($social['url'])) : ?>
                        <li>
                          <a href="<?= esc_html($social['url']); ?>" target="_blank" class="dark-icon" rel="noopener noreferrer">
                            <span class="icon--<?= esc_html($social['icon']); ?>"><span class="visually-hidden"><?= esc_html($social['icon']); ?></span></span>

                          </a>
                        </li>
                      <?php endif; ?>
                    <?php endforeach; ?>
                  </ul>
                <?php endif; ?>
              </div>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
      <div class="team-bios-modal__right no-animate">
        <h5>
          <?= esc_html($title) ?>
        </h5>
        <?= $content; ?>
      </div>
    </div>

  <?php
  endwhile; // End of the loop.
  ?>

</main>

<?php get_footer();

?>