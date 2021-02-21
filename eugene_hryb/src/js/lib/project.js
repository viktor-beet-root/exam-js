import ProjectArticle from './projectArticle';

const proArticle = new ProjectArticle({
    wrapper: '.project',
    article: {
        wrapper: '.project__article',
        title: '.project__article-title',
        text: '.project__article-text',
        button: '.project__article-button',
    },
    word:24,
});
