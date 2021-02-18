import $ from 'jquery';
import 'slick-carousel';
import 'sticky-js';

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
});

$('.autoplay').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


const imaArr = [
    "../image/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg",
    "../image/dog-5924174_640.jpg",
    "../image/light-bulb-2010022_640.jpg",
    "../image/light-bulb-5831252_640.jpg",
    "../image/light-bulbs-1125016_640.jpg",
    "../image/city-336708_640.jpg",
    "../image/hot-air-balloon-736879_640.jpg",
    "../image/sky-690293_640.jpg",
];

const btn = document.querySelector('.btn_add');
let ii = 0;

btn.addEventListener('click', function(event) {
    ii = ii + 1;
    console.log(ii);
    event.preventDefault();
    const div = document.createElement('div');
    div.classList.add("remove");
    div.classList.add("col-12");
    document.querySelector(".newgalerry").appendChild(div);
    if (ii % 2 !== 0) {
        for (let i = 0; i < imaArr.length; i++) {
            let img = document.createElement('img');
            img.src = imaArr[i];
            img.classList.add("galery__img");
            img.classList.add("col-3");
            img.alt = "bud";
            div.appendChild(img);
            btn.textContent = "Remove";
        };
    } else {
        div.remove();
        document.querySelector(".newgalerry").removeChild(document.querySelector(".remove"));
        btn.textContent = "see more";
    }
})