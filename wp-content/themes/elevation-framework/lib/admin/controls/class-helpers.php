<?php
/**
 * File Name: class-helpers.php
 *
 * Description: This file contains import demo content functionality.
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin\Controls;

/**
 * Class Helpers
 */
class Helpers {

	/**
	 * Instance of Helpers
	 *
	 * @var Helpers
	 */
	protected static $instance;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'elevation_import_admin_menu' ) );
		add_action( 'widgets_init', array( $this, 'elevation_widgets_init' ) );
	}

	/**
	 * Import demo content page html
	 *
	 * @return html
	 */
	public function elevation_import_page_html() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		// Handle import action.
		if ( isset( $_POST['import_demo_content'] ) ) {
			// Unslash the data before verification.
			$import_demo_nonce = isset( $_POST['import_demo_nonce'] ) ? sanitize_text_field( wp_unslash( $_POST['import_demo_nonce'] ) ) : '';

			// Verify the nonce after unslashing.
			if ( ! wp_verify_nonce( $import_demo_nonce, 'import_demo_nonce_action' ) ) {
				wp_die( esc_html__( 'Nonce verification failed', 'elevation' ) );
			}

			$this->elevation_import_demo_pages();
			$this->add_default_widgets_to_sidebars();
			$this->set_custom_image();
			$this->elevation_create_custom_menu();

			echo '<div class="updated"><p>Demo pages imported successfully!</p></div>';
		}

		?>
		<div class="wrap">
			<h1><?php echo esc_html__( 'Import Elevation Demo Content' ); ?></h1>
			<p><?php echo esc_html__( 'Click the button below to import default pages for your theme.' ); ?></p>
			<form method="post">
			<?php wp_nonce_field( 'import_demo_nonce_action', 'import_demo_nonce' ); ?>
				<input type="submit" name="import_demo_content" class="button button-primary" value="<?php echo esc_attr__( 'Import Pages', 'elevation' ); ?>">
			</form>
		</div>
		<?php
	}

	/**
	 * Register manage page
	 *
	 * @return void
	 */
	public function elevation_import_admin_menu() {
		add_management_page(
			'Import Elevation Demo Content', // Page title.
			'Import Elevation Demo Content',      // Menu title.
			'manage_options',      // Capability.
			'elevation-import',      // Menu slug.
			array( $this, 'elevation_import_page_html' ), // Callback function.
		);
	}

	/**
	 * Import demo content
	 *
	 * @return void
	 */
	public function elevation_import_demo_pages() {

		$image_paths = array(
			'home-banner'         => get_template_directory() . '/lib/admin/controls/images/home-banner.webp',
			'home-second-section' => get_template_directory() . '/lib/admin/controls/images/home-second-section.webp',
			'about-banner'        => get_template_directory() . '/lib/admin/controls/images/about-banner.webp',
			'contact-banner'      => get_template_directory() . '/lib/admin/controls/images/contact-banner.webp',
		);

		$uploaded_images = array();
		foreach ( $image_paths as $key => $image_path ) {
			$uploaded_images[ $key ] = $this->elevation_upload_image( $image_path );
		}

		$default_pages = array(
			array(
				'title'   => 'Home',
				'content' => $this->elevation_home_page( $uploaded_images ),
			),
			array(
				'title'   => 'About',
				'content' => $this->elevation_about_page( $uploaded_images ),
			),
			array(
				'title'   => 'Contact',
				'content' => $this->elevation_contact_page( $uploaded_images ),
			),
		);

		foreach ( $default_pages as $page ) {
			// Check if the page already exists.
			$page_query = new WP_Query(
				array(
					'post_type'      => 'page',
					'title'          => $page['title'],
					'post_status'    => 'publish',
					'posts_per_page' => 1,
				)
			);

			$existing_page = $page_query->have_posts();

			if ( ! $existing_page ) {
				$page_id = wp_insert_post(
					array(
						'post_title'   => $page['title'],
						'post_content' => $page['content'],
						'post_status'  => 'publish',
						'post_type'    => 'page',
					)
				);
				if ( 'Home' === $page['title'] ) {
					update_option( 'show_on_front', 'page' ); // Set static page mode.
					update_option( 'page_on_front', $page_id ); // Set the front page.
				}
			}
		}
	}

	/**
	 * Upload image function
	 *
	 * @param string $file_path The path to the file being uploaded.
	 *
	 * @return array
	 */
	private function elevation_upload_image( $file_path ) {
		if ( ! file_exists( $file_path ) ) {
			return false;
		}

		$file_name     = basename( $file_path );
		$upload_dir    = wp_upload_dir();
		$new_file_path = $upload_dir['path'] . '/' . $file_name;

		if ( ! copy( $file_path, $new_file_path ) ) {
			return false;
		}

		$file_type  = wp_check_filetype( $new_file_path, null );
		$attachment = array(
			'post_mime_type' => $file_type['type'],
			'post_title'     => sanitize_file_name( $file_name ),
			'post_content'   => '',
			'post_status'    => 'inherit',
		);

		$attach_id = wp_insert_attachment( $attachment, $new_file_path );
		require_once ABSPATH . 'wp-admin/includes/image.php';
		$attach_data = wp_generate_attachment_metadata( $attach_id, $new_file_path );
		wp_update_attachment_metadata( $attach_id, $attach_data );

		return array( $attach_id, wp_get_attachment_url( $attach_id ) ); // Return the image URL.
	}

	/**
	 * Static front page
	 *
	 * @param array $uploaded_images An array with id and url of the uploaded images.
	 *
	 * @return string
	 */
	private function elevation_home_page( $uploaded_images ) {
		return '
        <!-- wp:elevation/interior-components--banner-full-img {"imgDesktop":{"url":"' . $uploaded_images['home-banner'][1] . '","alt":"","id":' . $uploaded_images['home-banner'][0] . ',"srcset":"' . $uploaded_images['home-banner'][1] . ' 150w, ' . $uploaded_images['home-banner'][1] . ' 300w, ' . $uploaded_images['home-banner'][1] . ' 1024w, ' . $uploaded_images['home-banner'][1] . ' 1920w","width":1920,"height":1281,"sizes":"(max-width: 1920px) 100vw, 1920px","focalPoint":{"x":0.68,"y":0.1}}} -->
<div data-block-id="interior-components/banner-full-img" class="wp-block-elevation-interior-components--banner-full-img alignfull banner-full-img"><picture class="banner-full-img__background"><img decoding="async" lazyload="lazy" src="' . $uploaded_images['home-banner'][1] . '" width="1920" height="1080" class="banner-full-img__background" style="object-position:68% 10%"/></picture><div class="container banner-full-img__container"><div class="banner-full-img__wrapper"><!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Elevation Free Theme</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"placeholder":"Type description here"} -->
<p>Designed for Impact, Built for Good.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:elevation/interior-components--banner-full-img -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--text-block-default-image {"id":"text-block-default-image-d556d239-d016-45d5-aa49-58d3316b034b","imageSize":"medium","cropImage":true,"withBorder":true} -->
<div id="text-block-default-image-d556d239-d016-45d5-aa49-58d3316b034b" data-block-id="interior-components/text-block-default-image" class="wp-block-elevation-interior-components--text-block-default-image text-block-default-image image-medium columns-row align-center crop-image with-border"><!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium","className":"text-block-default-image__container"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium text-block-default-image__container"><!-- wp:elevation/interior-components--group {"className":"text-block-default-image__image"} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default text-block-default-image__image"><!-- wp:elevation/interior-components--image-with-srcset {"img":{"url":"' . $uploaded_images['home-second-section'][1] . '","id":' . $uploaded_images['home-second-section'][0] . ',"caption":""},"inheritClassName":"media"} /--></div>
<!-- /wp:elevation/interior-components--group -->

<!-- wp:elevation/interior-components--group {"className":"text-block-default-image__info"} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default text-block-default-image__info"><!-- wp:heading -->
<h2 class="wp-block-heading">H2. Heading lorem ipsum</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Name of Block: Text-Block, Layout: Default-Small-Image. Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes <a href="#">nascetur ridiculus</a> mus mauris vitae ultricies leo.</p>
<!-- /wp:paragraph -->

<!-- wp:elevation/interior-components--buttons -->
<div class="wp-block-elevation-interior-components--buttons buttons"><!-- wp:elevation/interior-components--button {"text":"Text Button"} -->
<a class="wp-block-elevation-interior-components--button button cta cta--primary--color-01" href="#" aria-label="Text Button">Text Button</a>
<!-- /wp:elevation/interior-components--button --></div>
<!-- /wp:elevation/interior-components--buttons --></div>
<!-- /wp:elevation/interior-components--group --></div>
<!-- /wp:elevation/interior-components--custom-container --></div>
<!-- /wp:elevation/interior-components--text-block-default-image -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--impact-default {"id":"impact-default-f6ac9c81-48ce-46be-a532-9be425b08c23"} -->
<div data-block-id="interior-components/impact-default" data-block-js="true" id="impact-default-f6ac9c81-48ce-46be-a532-9be425b08c23" class="wp-block-elevation-interior-components--impact-default impact-default counter"><!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium","className":"impact-default__row"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium impact-default__row"><!-- wp:elevation/interior-components--group {"className":""} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">H3. Heading lorem</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Maximum 50 words per paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero donec pulvinar vulputate.</p>
<!-- /wp:paragraph -->

<!-- wp:elevation/interior-components--buttons -->
<div class="wp-block-elevation-interior-components--buttons buttons"><!-- wp:elevation/interior-components--button {"text":"Text Button"} -->
<a class="wp-block-elevation-interior-components--button button cta cta--primary--color-01" href="#" aria-label="Text Button">Text Button</a>
<!-- /wp:elevation/interior-components--button --></div>
<!-- /wp:elevation/interior-components--buttons -->

<!-- wp:elevation/interior-components--spacer -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer --></div>
<!-- /wp:elevation/interior-components--group -->

<!-- wp:elevation/interior-components--group {"allowedBlocks":["elevation/interior-components\u002d\u002dimpact-default-item"],"className":""} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:elevation/interior-components--impact-default-item {"id":"impact-default-item-eb7a6409-5e6c-4daa-9d30-bf2c1b2a84e7","value":"8700+"} -->
<div id="impact-default-item-eb7a6409-5e6c-4daa-9d30-bf2c1b2a84e7" class="wp-block-elevation-interior-components--impact-default-item impact-default-item"><div class="impact-default-item__header"><h2 class="impact-default-item__value has-h-1-font-size"><span class="impact-default-item__value-value numscroller" data-num="8700+">8700+</span></h2></div><div class="impact-default-item__content"><!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:elevation/interior-components--impact-default-item -->

<!-- wp:elevation/interior-components--impact-default-item {"id":"impact-default-item-067116d5-c3fe-4eaa-a0ec-cf08c6d026ae","value":"45%"} -->
<div id="impact-default-item-067116d5-c3fe-4eaa-a0ec-cf08c6d026ae" class="wp-block-elevation-interior-components--impact-default-item impact-default-item"><div class="impact-default-item__header"><h2 class="impact-default-item__value has-h-1-font-size"><span class="impact-default-item__value-value numscroller" data-num="45%">45%</span></h2></div><div class="impact-default-item__content"><!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:elevation/interior-components--impact-default-item -->

<!-- wp:elevation/interior-components--impact-default-item {"id":"impact-default-item-1fa1c7f5-0da0-4476-a0f1-71cb23f360a1","value":"50+"} -->
<div id="impact-default-item-1fa1c7f5-0da0-4476-a0f1-71cb23f360a1" class="wp-block-elevation-interior-components--impact-default-item impact-default-item"><div class="impact-default-item__header"><h2 class="impact-default-item__value has-h-1-font-size"><span class="impact-default-item__value-value numscroller" data-num="50+">50+</span></h2></div><div class="impact-default-item__content"><!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:elevation/interior-components--impact-default-item --></div>
<!-- /wp:elevation/interior-components--group --></div>
<!-- /wp:elevation/interior-components--custom-container --></div>
<!-- /wp:elevation/interior-components--impact-default -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium"><!-- wp:elevation/interior-components--group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|70","right":"var:preset|spacing|60","bottom":"var:preset|spacing|70","left":"var:preset|spacing|60"}}},"backgroundColor":"ui-background-light-01"} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default has-ui-background-light-01-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--70);padding-left:var(--wp--preset--spacing--60)"><!-- wp:elevation/interior-components--text-block-quote {"id":"text-block-quote-b3952065-7d4c-4d5a-9f78-7e080076837c","borderColor":"#df0141ff"} -->
<blockquote id="text-block-quote-b3952065-7d4c-4d5a-9f78-7e080076837c" data-block-id="interior-components/text-block-quote" class="wp-block-elevation-interior-components--text-block-quote text-block-quote"><span aria-hidden="true" class="text-block-quote__border" style="border-color:#df0141ff"><svg width="21" height="16" viewBox="0 0 21 16" fill="none"><path d="M7.39949 0.00173205C7.14492 -0.00173205 6.96706 0.0883348 6.81188 0.294449C4.87993 2.88733 2.94275 5.47329 1.00382 8.05925C0.226156 9.09675 -0.0981613 10.2503 0.0256371 11.5389C0.287183 14.2721 2.87474 16.3246 5.61923 15.9574C8.49972 15.5712 10.1963 13.0562 9.98182 10.6954C9.87197 9.48993 9.39595 8.45242 8.54855 7.5864C8.07253 7.09969 7.51457 6.72557 6.86245 6.46056C6.88686 6.4034 6.90081 6.36703 6.91824 6.33412C7.35067 5.45597 7.78134 4.57609 8.21377 3.69794C8.68281 2.74531 9.15359 1.79268 9.62088 0.838314C9.84581 0.37932 9.60868 0.00519616 9.10128 0.00346411C8.5346 0.00346411 7.96617 0.0103923 7.39949 0V0.00173205Z" fill="#df0141ff"></path><path d="M19.1234 14.9237C21.4453 13.1128 21.644 9.63474 19.5435 7.57945C19.0607 7.10809 18.5151 6.73031 17.8649 6.46517C17.9625 6.26588 18.0479 6.08738 18.1368 5.91062C18.9648 4.22792 19.7876 2.54176 20.6243 0.864264C20.8509 0.41023 20.5755 -0.0264736 20.0909 0.00125367C19.5505 0.0324468 19.0084 0.0185832 18.468 0.00471958C18.1682 -0.00394518 17.9677 0.101765 17.7865 0.344378C15.8603 2.93341 13.9219 5.51378 11.9922 8.09934C11.0823 9.31761 10.7999 10.6797 11.1381 12.1527C11.9556 15.707 16.2246 17.1835 19.1234 14.9237Z" fill="#df0141ff"></path></svg></span><!-- wp:paragraph {"textColor":"ui-foreground-primary-text-highlight-text"} -->
<p class="has-ui-foreground-primary-text-highlight-text-color has-text-color">“Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"ui-foreground-primary-text-highlight-text"} -->
<p class="has-ui-foreground-primary-text-highlight-text-color has-text-color"><strong>Name Lorem Ipsum</strong> Func Area Lorem Ipsum.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:elevation/interior-components--text-block-quote --></div>
<!-- /wp:elevation/interior-components--group --></div>
<!-- /wp:elevation/interior-components--custom-container -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
';
	}

	/**
	 * About page
	 *
	 * @param array $uploaded_images An array with id and url of the uploaded images.
	 *
	 * @return string
	 */
	private function elevation_about_page( $uploaded_images ) {
		return '
        <!-- wp:elevation/interior-components--banner-full-img {"imgDesktop":{"url":"' . $uploaded_images['about-banner'][1] . '","alt":"","id":' . $uploaded_images['about-banner'][0] . ',"srcset":"' . $uploaded_images['about-banner'][1] . ' 150w, ' . $uploaded_images['about-banner'][1] . ' 300w, ' . $uploaded_images['about-banner'][1] . ' 1024w, ' . $uploaded_images['about-banner'][1] . ' 1920w","width":1920,"height":854,"sizes":"(max-width: 1920px) 100vw, 1920px","focalPoint":{"x":0.75,"y":0.29}}} -->
<div data-block-id="interior-components/banner-full-img" class="wp-block-elevation-interior-components--banner-full-img alignfull banner-full-img"><picture class="banner-full-img__background"><img decoding="async" lazyload="lazy" src="' . $uploaded_images['about-banner'][1] . '" width="1920" height="1080" class="banner-full-img__background" style="object-position:75% 28.999999999999996%"/></picture><div class="container banner-full-img__container"><div class="banner-full-img__wrapper"><!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">About Us</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"placeholder":"Type description here"} -->
<p>Welcome to our WordPress theme. Designed with flexibility and performance in mind, our theme helps you create stunning, functional websites with ease.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:elevation/interior-components--banner-full-img -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium"><!-- wp:elevation/interior-components--group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|70","right":"var:preset|spacing|60","bottom":"var:preset|spacing|70","left":"var:preset|spacing|60"}}},"backgroundColor":"ui-base-white"} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default has-ui-base-white-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--70);padding-left:var(--wp--preset--spacing--60)"><!-- wp:heading -->
<h2 class="wp-block-heading">Our Mission</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Our mission is to provide an intuitive, user-friendly experience that allows creators to build beautiful, high-performance websites effortlessly.</p>
<!-- /wp:paragraph -->

<!-- wp:elevation/interior-components--spacer -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>Accessibility Ready</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Designed to meet accessibility standards, ensuring a seamless experience for all users, including those with disabilities.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading -->
<h2 class="wp-block-heading">Optimized Performance</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lightweight and fast, our theme ensures excellent performance and loading times.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:elevation/interior-components--group --></div>
<!-- /wp:elevation/interior-components--custom-container -->

<!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium"><!-- wp:elevation/interior-components--group -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:elevation/interior-components--lists-bullets {"id":"lists-bullets-3ca498c2-b7cc-4559-bddd-19d08cc2d084"} -->
<div data-block-id="interior-components/lists-bullets" data-block-js="false" id="lists-bullets-3ca498c2-b7cc-4559-bddd-19d08cc2d084" class="wp-block-elevation-interior-components--lists-bullets lists-bullets row-undefined"><!-- wp:elevation/interior-components--spacer -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium","className":""} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium"><!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small","line":true,"lineType":"dots","borderColor":"#8a55b3ff"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-enable line-type-dots position-top" style="--border-color:#8a55b3ff"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--group {"tagName":"ul","allowedBlocks":["elevation/interior-components\u002d\u002dlists-bullets-item"],"className":"lists-bullets__container"} -->
<ul data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default lists-bullets__container"><!-- wp:elevation/interior-components--lists-bullets-item {"id":"lists-bullets-item-ad99d531-edf1-418d-8dcd-ed4daedc0194"} -->
<li data-block-id="interior-components/lists-bullets-item" id="lists-bullets-item-ad99d531-edf1-418d-8dcd-ed4daedc0194" class="wp-block-elevation-interior-components--lists-bullets-item lists-bullets-item"><div class="lists-bullets-item__container"><!-- wp:heading {"level":4,"fontSize":"h6"} -->
<h4 class="wp-block-heading has-h-6-font-size">Drag-and-drop editing</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Easily customize your content by dragging and dropping elements, no coding required.</p>
<!-- /wp:paragraph --></div></li>
<!-- /wp:elevation/interior-components--lists-bullets-item -->

<!-- wp:elevation/interior-components--lists-bullets-item {"id":"lists-bullets-item-16981518-3f0e-4fae-9532-445266e284d3"} -->
<li data-block-id="interior-components/lists-bullets-item" id="lists-bullets-item-16981518-3f0e-4fae-9532-445266e284d3" class="wp-block-elevation-interior-components--lists-bullets-item lists-bullets-item"><div class="lists-bullets-item__container"><!-- wp:heading {"level":4,"fontSize":"h6"} -->
<h4 class="wp-block-heading has-h-6-font-size">Fully responsive design</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Your website adapts seamlessly to any screen size, ensuring a great user experience on all devices.</p>
<!-- /wp:paragraph --></div></li>
<!-- /wp:elevation/interior-components--lists-bullets-item -->

<!-- wp:elevation/interior-components--lists-bullets-item {"id":"lists-bullets-item-a440a397-d96c-4260-a380-f9eb35d72291"} -->
<li data-block-id="interior-components/lists-bullets-item" id="lists-bullets-item-a440a397-d96c-4260-a380-f9eb35d72291" class="wp-block-elevation-interior-components--lists-bullets-item lists-bullets-item"><div class="lists-bullets-item__container"><!-- wp:heading {"level":4,"fontSize":"h6"} -->
<h4 class="wp-block-heading has-h-6-font-size">SEO-friendly structure</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Built with clean code and best practices to help your site rank higher in search engines.</p>
<!-- /wp:paragraph --></div></li>
<!-- /wp:elevation/interior-components--lists-bullets-item --></ul>
<!-- /wp:elevation/interior-components--group -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small","line":true,"lineType":"dots","linePosition":"bottom","borderColor":"#8a55b3ff"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-enable line-type-dots position-bottom" style="--border-color:#8a55b3ff"></div>
<!-- /wp:elevation/interior-components--spacer --></div>
<!-- /wp:elevation/interior-components--custom-container -->

<!-- wp:elevation/interior-components--spacer -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer --></div>
<!-- /wp:elevation/interior-components--lists-bullets --></div>
<!-- /wp:elevation/interior-components--group --></div>
<!-- /wp:elevation/interior-components--custom-container -->

<!-- wp:elevation/interior-components--custom-container {"containerWidth":"small"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--small"><!-- wp:elevation/interior-components--group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|70","right":"var:preset|spacing|60","bottom":"var:preset|spacing|70","left":"var:preset|spacing|60"}}},"backgroundColor":"ui-background-light-01"} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default has-ui-background-light-01-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--70);padding-left:var(--wp--preset--spacing--60)"><!-- wp:elevation/interior-components--text-block-quote {"id":"text-block-quote-b4fee023-5b37-4d56-946c-3ebd4c9cff06","borderColor":"#47127eff"} -->
<blockquote id="text-block-quote-b4fee023-5b37-4d56-946c-3ebd4c9cff06" data-block-id="interior-components/text-block-quote" class="wp-block-elevation-interior-components--text-block-quote text-block-quote"><span aria-hidden="true" class="text-block-quote__border" style="border-color:#47127eff"><svg width="21" height="16" viewBox="0 0 21 16" fill="none"><path d="M7.39949 0.00173205C7.14492 -0.00173205 6.96706 0.0883348 6.81188 0.294449C4.87993 2.88733 2.94275 5.47329 1.00382 8.05925C0.226156 9.09675 -0.0981613 10.2503 0.0256371 11.5389C0.287183 14.2721 2.87474 16.3246 5.61923 15.9574C8.49972 15.5712 10.1963 13.0562 9.98182 10.6954C9.87197 9.48993 9.39595 8.45242 8.54855 7.5864C8.07253 7.09969 7.51457 6.72557 6.86245 6.46056C6.88686 6.4034 6.90081 6.36703 6.91824 6.33412C7.35067 5.45597 7.78134 4.57609 8.21377 3.69794C8.68281 2.74531 9.15359 1.79268 9.62088 0.838314C9.84581 0.37932 9.60868 0.00519616 9.10128 0.00346411C8.5346 0.00346411 7.96617 0.0103923 7.39949 0V0.00173205Z" fill="#47127eff"></path><path d="M19.1234 14.9237C21.4453 13.1128 21.644 9.63474 19.5435 7.57945C19.0607 7.10809 18.5151 6.73031 17.8649 6.46517C17.9625 6.26588 18.0479 6.08738 18.1368 5.91062C18.9648 4.22792 19.7876 2.54176 20.6243 0.864264C20.8509 0.41023 20.5755 -0.0264736 20.0909 0.00125367C19.5505 0.0324468 19.0084 0.0185832 18.468 0.00471958C18.1682 -0.00394518 17.9677 0.101765 17.7865 0.344378C15.8603 2.93341 13.9219 5.51378 11.9922 8.09934C11.0823 9.31761 10.7999 10.6797 11.1381 12.1527C11.9556 15.707 16.2246 17.1835 19.1234 14.9237Z" fill="#47127eff"></path></svg></span><!-- wp:paragraph {"textColor":"ui-foreground-primary-text-headings-span"} -->
<p class="has-ui-foreground-primary-text-headings-span-color has-text-color">Building with WordPress has never been easier. With a seamless block editor, customizable settings, and a library of pre-designed templates, you can launch your website in minutes.<br></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"ui-foreground-primary-text-headings-span"} -->
<p class="has-ui-foreground-primary-text-headings-span-color has-text-color"><strong>Our Development Team</strong> at ELEVATION</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:elevation/interior-components--text-block-quote --></div>
<!-- /wp:elevation/interior-components--group --></div>
<!-- /wp:elevation/interior-components--custom-container -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->
';
	}

	/**
	 * Contact page
	 *
	 * @param array $uploaded_images An array with id and url of the uploaded images.
	 *
	 * @return string
	 */
	private function elevation_contact_page( $uploaded_images ) {
		return '
        <!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium"><!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><strong>Get in Touch with Us</strong></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We’d love to hear from you! Whether you have questions, feedback, or need assistance, don’t hesitate to reach out. We are here to help.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:elevation/interior-components--custom-container -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__normal"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__normal line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--callout-background-content-box-centered {"align":"full","imgDesktop":{"url":"' . $uploaded_images['contact-banner'][1] . '","alt":"","id":' . $uploaded_images['contact-banner'][0] . ',"srcset":"' . $uploaded_images['contact-banner'][1] . ' 150w, ' . $uploaded_images['contact-banner'][1] . ' 300w, ' . $uploaded_images['contact-banner'][1] . ' 1024w, ' . $uploaded_images['contact-banner'][1] . ' 1920w","width":1920,"height":1280,"sizes":"(max-width: 1920px) 100vw, 1920px","focalPoint":{"x":0.52,"y":0.59}}} -->
<div data-block-id="interior-components/callout-background-content-box-centered" class="wp-block-elevation-interior-components--callout-background-content-box-centered alignfull callout-background-content-box-centered"><picture class="callout-background-content-box-centered__background"><img decoding="async" lazyload="lazy" src="' . $uploaded_images['contact-banner'][1] . '" width="1920" height="1080" class="callout-background-content-box-centered__background" style="object-position:52% 59%"/></picture><div class="container callout-background-content-box-centered__container"><div class="callout-background-content-box-centered__wrapper"><!-- wp:elevation/interior-components--group {"className":""} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:heading -->
<h2 class="wp-block-heading">Information</h2>
<!-- /wp:heading -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small","line":true,"lineType":"dots","borderColor":"#fbf9f8ff"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-enable line-type-dots position-top" style="--border-color:#fbf9f8ff"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p><strong>Our Office Hours</strong><br>Monday – Friday: 9:00 AM – 6:00 PM<br>Saturday – Sunday: Closed</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|ui-base-white"}}}},"textColor":"ui-base-white"} -->
<p class="has-ui-base-white-color has-text-color has-link-color"><strong>Contact Information</strong><br>Phone: (123) 456-7890<br>Email: <a>contact@yourdomain.com</a><br>Address: 123 Main St, City, State, ZIP</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p><strong>Contact Form</strong><br>Please fill out the form below, and we will get back to you as soon as possible.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small","line":true,"lineType":"dots","linePosition":"bottom","borderColor":"#fbf9f8ff"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-enable line-type-dots position-bottom" style="--border-color:#fbf9f8ff"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">[YOUR CONTACT FORM HERE]</p>
<!-- /wp:paragraph --></div>
<!-- /wp:elevation/interior-components--group --></div></div></div>
<!-- /wp:elevation/interior-components--callout-background-content-box-centered -->

<!-- wp:elevation/interior-components--impact-default {"id":"impact-default-4aaba4d5-bdbd-4208-9ea7-c5ee8ecaabb0"} -->
<div data-block-id="interior-components/impact-default" data-block-js="true" id="impact-default-4aaba4d5-bdbd-4208-9ea7-c5ee8ecaabb0" class="wp-block-elevation-interior-components--impact-default impact-default counter"><!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium","className":"impact-default__row"} -->
<div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium impact-default__row"><!-- wp:elevation/interior-components--spacer {"space":"spacer__large","line":true,"lineType":"dash","linePosition":"bottom"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-enable line-type-dash position-bottom" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer -->

<!-- wp:elevation/interior-components--group {"className":""} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Transform Your Website with Our WordPress Theme</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Our theme is designed to elevate your website\'s design and functionality. With a modern layout, custom widgets, and seamless integration, you can build a unique online presence. Whether you’re running a blog, business, or portfolio, our theme adapts to all your needs.</p>
<!-- /wp:paragraph -->

<!-- wp:elevation/interior-components--spacer -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer --></div>
<!-- /wp:elevation/interior-components--group -->

<!-- wp:elevation/interior-components--group {"allowedBlocks":["elevation/interior-components\u002d\u002dimpact-default-item"],"className":""} -->
<div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:elevation/interior-components--impact-default-item {"id":"impact-default-item-774b8724-ddb0-42d9-b510-c503fb584930","value":"8700+"} -->
<div id="impact-default-item-774b8724-ddb0-42d9-b510-c503fb584930" class="wp-block-elevation-interior-components--impact-default-item impact-default-item"><div class="impact-default-item__header"><h2 class="impact-default-item__value has-h-1-font-size"><span class="impact-default-item__value-value numscroller" data-num="8700+">8700+</span></h2></div><div class="impact-default-item__content"><!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">Over 8,700 satisfied users have transformed their websites using our theme. Join the growing community today.</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:elevation/interior-components--impact-default-item -->

<!-- wp:elevation/interior-components--impact-default-item {"id":"impact-default-item-3d60ec42-e701-4e46-afe8-5ead48191abe","value":"45%"} -->
<div id="impact-default-item-3d60ec42-e701-4e46-afe8-5ead48191abe" class="wp-block-elevation-interior-components--impact-default-item impact-default-item"><div class="impact-default-item__header"><h2 class="impact-default-item__value has-h-1-font-size"><span class="impact-default-item__value-value numscroller" data-num="45%">45%</span></h2></div><div class="impact-default-item__content"><!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">of users reported improved website performance and a noticeable increase in user engagement after switching to our theme.</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:elevation/interior-components--impact-default-item -->

<!-- wp:elevation/interior-components--impact-default-item {"id":"impact-default-item-27024fa5-f899-40b9-8644-47e29d8f5504","value":"50+"} -->
<div id="impact-default-item-27024fa5-f899-40b9-8644-47e29d8f5504" class="wp-block-elevation-interior-components--impact-default-item impact-default-item"><div class="impact-default-item__header"><h2 class="impact-default-item__value has-h-1-font-size"><span class="impact-default-item__value-value numscroller" data-num="50+">50+</span></h2></div><div class="impact-default-item__content"><!-- wp:paragraph {"fontSize":"body"} -->
<p class="has-body-font-size">More than 50 unique block combinations to choose from, providing endless possibilities for layout.</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:elevation/interior-components--impact-default-item --></div>
<!-- /wp:elevation/interior-components--group -->

<!-- wp:elevation/interior-components--spacer {"space":"spacer__large","line":true,"lineType":"dash"} -->
<div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-enable line-type-dash position-top" style="--border-color:ui-border-bounds"></div>
<!-- /wp:elevation/interior-components--spacer --></div>
<!-- /wp:elevation/interior-components--custom-container --></div>
<!-- /wp:elevation/interior-components--impact-default -->
        ';
	}

	/**
	 * Register footer widgets
	 *
	 * @return void
	 */
	public function elevation_widgets_init() {
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer second column', 'elevation' ),
				'id'            => 'footer-1',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer third column', 'elevation' ),
				'id'            => 'footer-2',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer fourth column', 'elevation' ),
				'id'            => 'footer-3',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
	}

	/**
	 * Add default widgets to sidebars
	 *
	 * @return void
	 */
	public function add_default_widgets_to_sidebars() {
		$this->update_option_wiget_block();
		$this->update_option_sidebar_widgets();
	}

	/**
	 * Update option wiget block
	 *
	 * @return void
	 */
	public function update_option_wiget_block() {

		$content_2 = preg_replace(
			'/\s+/',
			' ',
			'<!-- wp:group {"layout":{"type":"default"}} -->
                    <div class="wp-block-group"><!-- wp:heading {"fontSize":"h6"} -->
                    <h2 class="wp-block-heading has-h-6-font-size">Contact</h2>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph -->
                    <p><a href="mailto:info@elevationweb.org">info@elevationweb.org</a></p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p><a href="tel:11234567890">+1 123-456-7890</a></p>
                    <!-- /wp:paragraph -->

                    <!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small"} -->
                    <div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div>
                    <!-- /wp:elevation/interior-components--spacer -->

                    <!-- wp:heading {"fontSize":"h6"} -->
                    <h2 class="wp-block-heading has-h-6-font-size">Address</h2>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph -->
                    <p>Address Line 1 <br>Address Line 2 <br>City, State, Zipcode</p>
                    <!-- /wp:paragraph --></div>
                    <!-- /wp:group -->'
		);

		$content_3 = preg_replace(
			'/\s+/',
			' ',
			'<!-- wp:elevation/interior-components--buttons -->
                <div class="wp-block-elevation-interior-components--buttons buttons"><!-- wp:elevation/interior-components--button {"url":"/contact/","text":"Reach out","btnStyle":"primary\u002d\u002dinverse"} -->
                <a class="wp-block-elevation-interior-components--button button cta cta--primary--inverse" href="/contact/" aria-label="Reach out">Reach out</a>
                <!-- /wp:elevation/interior-components--button --></div>
                <!-- /wp:elevation/interior-components--buttons -->'
		);

		$widget_block = array(
			2              =>
			array(
				'content' => $content_2,
			),
			3              =>
			array(
				'content' => $content_3,
			),
			'_multiwidget' => 1,
		);

		update_option( 'widget_block', $widget_block );
	}

	/**
	 * Update option sidebar widgets
	 *
	 * @return void
	 */
	public function update_option_sidebar_widgets() {
		$sidebar_widgets = array(
			'wp_inactive_widgets' =>
			array(),
			'footer-1'            =>
			array(),
			'footer-2'            =>
			array(
				0 => 'block-2',
			),
			'footer-3'            =>
			array(
				0 => 'block-3',
			),
			'array_version'       => 3,
		);

		update_option( 'sidebar_widgets', $sidebar_widgets );
	}

	/**
	 * Set custom images
	 *
	 * @return void
	 */
	private function set_custom_image() {
		// Define the image URL.
		$header_image_url = get_template_directory_uri() . '/lib/admin/controls/images/logo-elevation.webp';
		$footer_image_url = get_template_directory_uri() . '/lib/admin/controls/images/logo-footer.svg';

		// Set the image URL programmatically in the customizer.
		set_theme_mod( 'custom_logo', $header_image_url );
		set_theme_mod( 'footer_logo', $footer_image_url );
	}

	/**
	 * Create custom menu
	 *
	 * @return void
	 */
	public function elevation_create_custom_menu() {
		// Define the menu name.
		$menu_name = 'Main Menu';

		// Check if the menu already exists.
		$menu_exists = wp_get_nav_menu_object( $menu_name );

		// Create menu if it doesn't exist.
		if ( ! $menu_exists ) {
			$menu_id = wp_create_nav_menu( $menu_name );

			// Add menu items.
			wp_update_nav_menu_item(
				$menu_id,
				0,
				array(
					'menu-item-title'  => esc_html__( 'Home', 'elevation' ),
					'menu-item-url'    => home_url( '/' ),
					'menu-item-status' => 'publish',
				)
			);

			wp_update_nav_menu_item(
				$menu_id,
				0,
				array(
					'menu-item-title'  => esc_html__( 'About', 'elevation' ),
					'menu-item-url'    => home_url( '/about/' ),
					'menu-item-status' => 'publish',
				)
			);

			wp_update_nav_menu_item(
				$menu_id,
				0,
				array(
					'menu-item-title'  => esc_html__( 'Contact', 'elevation' ),
					'menu-item-url'    => home_url( '/contact/' ),
					'menu-item-status' => 'publish',
				)
			);

			// Assign menu to a theme location (update with your theme location).
			$locations           = get_theme_mod( 'nav_menu_locations' );
			$locations['menu-1'] = $menu_id; // Change 'menu-1' to the correct theme location.
			set_theme_mod( 'nav_menu_locations', $locations );
		}
	}

	/**
	 * Get the instance of the class
	 *
	 * @return object
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
}
