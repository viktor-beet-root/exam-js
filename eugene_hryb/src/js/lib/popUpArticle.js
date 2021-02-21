
export default class PopUpArticle {
    constructor(options){
        this.preview = options.preview;

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add('pop-up-article');

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('pop-up-article__content-wrapper');

        this.closeButton = document.createElement('button');
        this.closeButton.classList.add('pop-up-article__button');

        this.title = document.createElement("h3");
        this.title.textContent = options.title;
        this.title.classList.add('pop-up-article__title');

        this.content = options.content;
        this.content.classList.add('pop-up-article__content');

        this.wrapper.appendChild(contentWrapper);
        contentWrapper.appendChild(this.closeButton);
        contentWrapper.appendChild(this.title);
        contentWrapper.appendChild(this.content);
        this.preview.parentNode.insertBefore(this.wrapper, this.preview);
        this.init();
    }

    init(){
        this.closeButton.addEventListener('click', this.close.bind(this));
    }

    open(){
        this.wrapper.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }

    close(){
        this.wrapper.classList.remove('active');
        document.querySelector('body').style.overflow = '';
    }
}
