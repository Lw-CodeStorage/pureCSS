$(document).ready(function () {

    // let data = [
    // ['<input type="text" value="程式設計">',
    // '<input type="text" value="110.11.12">',
    // '<input type="text" value="60">',
    // ' <div class="selfTablecContainer">\
    //     <button type="button" class="selfTableFunctionEdit" >\
    //         <i class="far fa-edit"></i>\
    //     </button>\
    //     <button type="button" class="selfTableFunctionTrash">\
    //         <i class="far fa-trash-alt"></i>\
    //     </button> \
    // </div>']
    // ]
    // $('#table_id_example12').DataTable(
    //     {
    //         columnDefs: [
    //             { responsivePriority: 1, targets: 0 },
    //         ],
    //         data: data,
    //     },
    // );


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
        $('.t2').css('display', 'block');
        $('.menuItem').click(function (e) {
            e.preventDefault();
            $(this).addClass('menuLight');
            $(this).siblings().removeClass('menuLight');
            if ($(this).children().text() == '課程校準') {
                $('.courseCardWarp').css('display', 'none');
                $('.courseSetContainer').css('display', 'flex')
            } else {
                $('.courseCardWarp').css('display', 'block');
            }
        });
    })
});