import './style.scss';
import './editor.scss';
import initSwiper from '../../assets/scripts/utilities/swiper';
import sameHeight from '../../assets/scripts/utilities/sameHeight';

// Initialize Swiper
initSwiper('.swiper__feed');

// Set the same height for the related block and the card body
sameHeight('.block__feed', '.card .card__body');
