<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package elevation
 */

get_header();

?>

<main id="primary" class="site-main container">
  <?php
  while (have_posts()) :
    the_post();


    // $categories = get_the_terms($id, 'team_categories');

    $permalink = get_permalink(get_the_ID());
    $title = get_the_title(get_the_ID());
    $position = get_field('position', get_the_ID());
    $content  = get_the_content();
    $email = get_field('email', get_the_ID());
    $social_network = get_field('social_network', get_the_ID());

    if (has_post_thumbnail()) {
      $image = get_post_thumbnail_id(get_the_ID());
    } else {
      $image = get_template_directory_uri() . '/src/assets/images/default.svg';
    }

    $team_args = [
      'image' => $image,
      'title' => $title,
      'position' => $position,
      'content' => $content,
      'email' => $email,
      'social_network' => $social_network,
      'permalink' => $permalink,
    ];

    // pop up content used in block and single-team template
    get_template_part('template-parts/team', 'pop-up', $team_args);

  endwhile; // End of the loop.
  ?>

</main>

<?php get_footer();

?>