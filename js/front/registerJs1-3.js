$(document).ready(function () {
  $('#registerButton1').click(function (e) {
    $('.registerCard1').css('display', 'none');
    $('.registerCard1-1').css('display', 'block');
  });

  $('#backRegisterButton1').click(function (e) {
    $('.registerCard1-1').css('display', 'none');
    $('.registerCard1').css('display', 'block');
  });

  $('#registerButton1-1').click(function (e) {
    $('.registerCard1-1').css('display', 'none');
    $('.registerCard2').css('display', 'block');
    $('li:first-child').toggleClass('active');
    $('li:nth-child(2)').toggleClass('active');
  });

  $('#registerButton2').click(function (e) {
    $('.registerCard2').css('display', 'none');
    $('.registerCard3').css('display', 'block');
    $('li:nth-child(2)').toggleClass('active');
    $('li:last-child').toggleClass('active');
  })

});
