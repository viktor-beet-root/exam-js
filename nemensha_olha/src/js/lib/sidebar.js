window.onscroll = function() {
    scrollFunction()
};

async function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        return document.getElementById("navbar").style.top = "0";
    }
}