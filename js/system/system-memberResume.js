$(document).ready(function () {
    $(".systemHeaderContainer").load("system-header(public).html", function () {

        var menuFlag = 0;
        $('.phoneMenu').click(function (e) {
            e.preventDefault();
            if (menuFlag == 0) {
                $('.menuContainer').css({
                    'left': '0px',
                    'transition': '0.3s'
                });

                menuFlag = 1;
            } else {
                menuFlag = 0;
                $('.menuContainer').css({
                    'left': '-200px',
                    'transition': '0.3s'
                });

            }
        });
    });
  /*header DOM載入 與 sidaBar動作載入*/
    $(".menuContainer").load("system-sideMenu(public).html", function () {
        $('.m2').css('display', 'block');
        $('.more1-1').click(function (e) {
            e.preventDefault();
            $('.onWorkPage').css('display', 'none');
            $('.onWorkRecord').css('display', 'block');
            $('.leaveRecord').css('display', 'none');
            $('.leaveRefusalRecord').css('display', 'none');
            $('.salaryPage').css('display', 'none');
            $('.performanceEquality').css('display', 'none');
        });
        $('.more1-2').click(function (e) {
            $('.onWorkPage').css('display', 'none');
            $('.onWorkRecord').css('display', 'none');
            $('.leaveRecord').css('display', 'block');
            $('.leaveRefusalRecord').css('display', 'none');
            $('.salaryPage').css('display', 'none');
            $('.performanceEquality').css('display', 'none');
        });
        $('.more1-3').click(function (e) {
            e.preventDefault();
            $('.onWorkPage').css('display', 'none');
            $('.onWorkRecord').css('display', 'none');
            $('.leaveRecord').css('display', 'none');
            $('.leaveRefusalRecord').css('display', 'block');
            $('.salaryPage').css('display', 'none');
            $('.performanceEquality').css('display', 'none');
        });


        $('.menuItem').click(function (e) {
            e.preventDefault();
            $(this).addClass('menuLight');
            if ($(this).children().text() == '上下班考勤') {
                $('.onWorkPage').css('display', 'block');
                $('.onWorkRecord').css('display', 'none');
                $('.leaveRecord').css('display', 'none');
                $('.leaveRefusalRecord').css('display', 'none');
                $('.salaryPage').css('display', 'none');
                $('.performanceEquality').css('display', 'none');
            } else if ($(this).children().text() == '薪資結算紀錄') {
                $('.onWorkPage').css('display', 'none');
                $('.onWorkRecord').css('display', 'none');
                $('.leaveRecord').css('display', 'none');
                $('.leaveRefusalRecord').css('display', 'none');
                $('.salaryPage').css('display', 'block');
                $('.performanceEquality').css('display', 'none');
            } else if ($(this).children().text() == '績效平等紀錄') {
                $('.onWorkPage').css('display', 'none');
                $('.onWorkRecord').css('display', 'none');
                $('.leaveRecord').css('display', 'none');
                $('.leaveRefusalRecord').css('display', 'none');
                $('.salaryPage').css('display', 'none');
                $('.performanceEquality').css('display', 'block');
            }


            $(this).siblings().removeClass('menuLight');
            $('.subItem').children().removeClass('menuSubLight');
            $('.subItem').css({
                'height': '0px',
                'transition': '0.3s',
                'border-left': '0px'
            });
        });
    })
});