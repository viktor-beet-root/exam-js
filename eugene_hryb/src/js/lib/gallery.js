import 'jquery';
import 'lightbox2';
import  LiteboxHiden from './liteboxHiden';

const liteboxHiden = new LiteboxHiden({
    wrapper: '.gallery__content',
    item: '.gallery__img-link',
    button: '.gallery__button-more',
    images: 5,
    imagesDisplay: 8,
})
