

$(document).ready(
  function () {
  
    $('.menuPhone').click(function (e) { 
       $('.overlaymenu').css('display','flex').css('margin-top','0vh');
    });
    $('.closeMenu').click(function (e) { 
      e.preventDefault();
      $('.overlaymenu'). css('margin-top', '-100vh');
    });

    $('.close').click(function (e) { 
      e.preventDefault();
      $('.popMenuPhone').css('display','none');
    });
    $('.logoutPhone').click(function (e) { 
      $('.popMenuPhone').css('display','block');
    });
    $('#carouselExampleFade').on('slide.bs.carousel', function () {
      alert(123);
      if($('.carousel-indicators li').hasClass('active') && $('.carousel-indicators li').attr('data-slide-to') == 0){
    
        alert("第一張圖片");
    }else if($('.carousel-indicators li').hasClass('active') && $('.carousel-indicators li').attr('data-slide-to') == 1){
        alert("第2張圖片");
      }
    
    })
    
    
  
    menuClickController();

  });

function menuClickController() {
  $('li').click(function () {
    if ($(this).hasClass('menuli1')) {

      $(this).addClass('active1')
      .siblings().removeClass('active2 active3 active4' );

    } else if ($(this).hasClass('menuli2')) {

      $(this).addClass('active2')
      .siblings().removeClass('active1 active3 active4');

    } else if ($(this).hasClass('menuli3')) {

      $(this).addClass('active3')
      .siblings().removeClass('active1 active2 active4');

    } else if ($(this).hasClass('menuli4')) {

      $(this).addClass('active4')
      .siblings().removeClass('active1 active2 active3');
    }
  });
}
