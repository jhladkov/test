/*const menu = document.querySelector('.menu');
const button = document.querySelector('.menu__btn');

button.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
})*/

/*$(function(){

    $('.to-go').click(function(e){
        e.preventDefault();
        $('.to-go').toggleClass('active');
    });
     
});*/
$(function(){
    $('.slider__wrapper').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        dots:true,
        responsive: [
           
            {
              breakpoint: 500,
              settings: {
                arrows: false,
              }
            }
          ]
    });

    $('.map__bg').click(function(){
        $('.map__bg').toggleClass('active');
    });

    $(" .tabs__wrapper .tab").click(function() {
        $(" .tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".tabs__wrapper .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    var mixer = mixitup('.portfolio__container');

    $(".menu, .up").on("click","a", function (event) {
                console.log(event);
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();
                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1500);
            });

            $('.menu__btn').click(function(){
                console.log(1);
                $('.menu ul').slideToggle()
            });
});