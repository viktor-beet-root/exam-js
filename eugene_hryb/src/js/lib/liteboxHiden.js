
export default class LiteboxHiden {

    constructor(option) {
        this._wrapper = document.querySelector(option.wrapper);
        this._items = this._wrapper.querySelectorAll(option.item);
        this._button = document.querySelector(option.button);
        this._images = option.images;
        this._imagesDisplay = option.imagesDisplay;
        this.init()
    }

    init(){
        if(this._items.length > this._images){
            for(let i = this._images; i < this._items.length ; i++){
                this._items[i].style.display = 'none';
            }
        }

        const self = this;

        this._button.addEventListener('click', this.seeMore.bind(this));
    }

    seeMore(){

        let endItem = this._images + this._imagesDisplay;

        endItem = endItem <= this._items.length ? endItem : this._items.length;

        for( let i = this._images; i < endItem; i++){
            this._items[i].style.display = '';
        }

        this._images = endItem;
    }
}
