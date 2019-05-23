
let sliderper = 3

  function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;




if(w < 900){
    sliderper = 2;
    if(w < 600){
        console.log('hello');
        sliderper = 1;
    }
}if( w > 901){
    sliderper = 3;
}

postSlider();
        

}


function postSlider(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: sliderper,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}