import PopUpArticle from "./popUpArticle";

export default class NewsList {
    constructor(wrapper, newsList) {
        this.wrapper = document.querySelector(wrapper);
        this.article = new Array;

        this.renderNewsList(newsList);
    }

    renderNewsList(newsList) {
        this.wrapper.innerHTML = '';

        let inHtml = '';
        if (typeof newsList === 'object') {
            newsList.forEach(element => {
                inHtml = `
                    <div class="news__slider-article">
                        <div class="news__article-img-wrapp">
                            <img src="${element.article.img}" alt="${element.article.title}" class="news__article-img">
                        </div>
                        <div class="news__article-content">
                            <h3 class="news__article-title">
                                ${element.article.title}
                            </h3>
                            <p class="news__article-text">
                                ${element.article.text.slice(0, 78)}...
                            </p>
                            <div class="news__autor-wrapp">
                                <div class="news__article-autor-img-wrapp">
                                    <img src="${element.autor.img}" alt="${element.autor.name}" class="news__article-autor-img">
                                </div>
                                <div class="news__article-autor-name-wrapp">
                                    <span class="news__article-autor-name">
                                        ${element.autor.name}
                                    </span>
                                    <span class="news__article-data">
                                        ${dateToString(element.autor.data)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                this.wrapper.insertAdjacentHTML('beforeend', inHtml);
                inHtml = '';
            });
        }

        const articleList = this.wrapper.querySelectorAll('.news__slider-article ');

        addArticle(newsList, articleList, this);
        initClick(this.article);
    }
}

//Приватные методы

function dateToString(date) {
    if(typeof date === 'string'){
        date = new Date(date);
    }

    let answer = '';

    if(date.getDate() < 10){
        answer = answer + '0' + date.getDate();
    }else{
        answer = answer +  date.getDate();
    }

    switch (date.getMonth()) {
        case 0:
            answer = answer + ' Jan';
            break;
        case 1:
            answer = answer + ' Feb';
            break;
        case 2:
            answer = answer + ' Mar';
            break;
        case 3:
            answer = answer + ' Apr';
            break;
        case 4:
            answer = answer + ' May';
            break;
        case 5:
            answer = answer + ' Jun';
            break;
        case 6:
            answer = answer + ' Jul';
            break;
        case 7:
            answer = answer + ' Aug';
            break;
        case 8:
            answer = answer + ' Sep';
            break;
        case 9:
            answer = answer + ' Oct';
            break;
        case 10:
            answer = answer + ' Nov';
            break;
        case 11:
            answer = answer + ' Dec';
            break;
    }

    answer = answer + ' ' + date.getFullYear();

    return answer;
}

function addArticle(newsList, articleList, self){
        let tempObject = new Object;
        let tempString = new String;
        let tempDiv;

        for(let i=0; i < articleList.length; i++){
            tempObject.clickArea = articleList[i].querySelector('.news__article-img-wrapp');
            tempDiv = document.createElement('div');
            tempString = `<div>
                <img src="${newsList[i].article.img}" alt="${newsList[i].article.title}" >
                </div>
                <p>
                    ${newsList[i].article.text}...
                </p>
            `
            tempDiv.insertAdjacentHTML('beforeend', tempString);
            tempObject.article = new PopUpArticle({
                preview: self.wrapper,
                title: newsList[i].article.title,
                content: tempDiv,
            })

            self.article.push(tempObject);
            tempObject = {};
            tempString = '';
            tempDiv = {};
        }
}

function initClick(article){
    article.forEach(e => {
        e.clickArea.addEventListener('click', openArticle.bind(this, e.article));
    })
}

function openArticle(self, event){
    event.preventDefault();
    self.open();
}
