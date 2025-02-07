<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$image = $args['image'];
$title = $args['title'];
$position = $args['position'];
$content = $args['content'];
$email = $args['email'];
$social_network = $args['social_network'];
$permalink = $args['permalink'];
?>

<div class="team-bios-modal">
    <div class="team-bios-modal__left">
        <div class="team-bios-modal__image">
            <?= Helpers::global_image(
                $image,
                [
                    'is_figure' => false,
                    'size' => 'medium',
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