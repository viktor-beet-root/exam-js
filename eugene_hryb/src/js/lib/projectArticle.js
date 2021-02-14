import PopUpArticle from './popUpArticle';

export default class ProjectArticle {
    constructor(options){
        this.wrapper = document.querySelector(options.wrapper);
        const nodeTitle = this.wrapper.querySelectorAll(options.article.wrapper);
        this.article = new Array;
        this.word = options.word;

        let tempObject = new Object;
        let tempP;
        for (let i=0; i<nodeTitle.length ; i++){
            tempObject.id = i;
            tempObject.wrapper = nodeTitle[i];
            tempObject.title = nodeTitle[i].querySelector(options.article.title);
            tempObject.text = nodeTitle[i].querySelector(options.article.text);
            tempObject.button = nodeTitle[i].querySelector(options.article.button);
            tempP = document.createElement('p');
            tempP.textContent = tempObject.text.textContent
            tempObject.popUpWin = new PopUpArticle({
                preview: tempObject.wrapper,
                title: tempObject.title.textContent,
                content: tempP ,
            })

            this.article.push(tempObject);

            tempObject = {};
        }

        this.init();
    }

    init(){
        let tempTextIn = '';
        let tempTextOut = '';
        this.article.forEach((item) => {
            tempTextIn = item.text.textContent;

            let counterWord = 0;
            for(let i=0; i<tempTextIn.length; i++){
                if(tempTextIn[i] === ' '){
                    if(counterWord < this.word){
                        counterWord++;;
                    }else{
                        break;
                    }
                }
                tempTextOut = tempTextOut + tempTextIn[i];
            }

            item.text.textContent = tempTextOut;

            tempTextIn = '';
            tempTextOut = '';

            item.button.addEventListener('click', this.openWin.bind(item));
        })


    }

    openWin(e){
        e.preventDefault();
        this.popUpWin.open();
    }
}
