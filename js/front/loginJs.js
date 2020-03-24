$(document).ready(function () {  
  $('#member').click(function (e) { 
    e.preventDefault();
    $(".accountInput").attr("placeholder",'請輸入會員帳號');
    $(".passwordInput").attr("placeholder",'請輸入會員密碼');
  });
  $('#company').click(function (e) { 

    e.preventDefault();
    $(".accountInput").attr("placeholder",'請輸入企業帳號');
    $(".passwordInput").attr("placeholder",'請輸入企業密碼');
  });
  $('#teacher').click(function (e) { 
    e.preventDefault();
    $(".accountInput").attr("placeholder",'請輸入教師帳號');
    $(".passwordInput").attr("placeholder",'請輸入教師密碼');
  });
});