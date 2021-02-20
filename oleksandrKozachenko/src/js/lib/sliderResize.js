import $ from 'jquery';

function sliderResize() {
    $(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth > 576) {
    newsSlider();   
  }
});
}
sliderResize()

export default sliderResize;
