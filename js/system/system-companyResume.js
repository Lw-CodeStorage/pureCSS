$(document).ready(function () {
    let data10 = [
        ["電腦網路專業人員", "從事規劃、指揮、協調及綜理組織之資訊及通訊系統採購、開發、維護及使用等活動之人員。"],
        ["電腦網路及系統技術員", "從事建置及維護網路與其他資料通訊系統之人員。"],
        ["其他資料庫及網路專業人員", "從事2521 至2523 細類以外資料庫及網路技術服務之專業人員，如資安工程師。"],
        ["電腦網路專業人員", "從事研究、分析及建議網際網路架構之策略，開發、實作及設定網際網路相關軟硬體等，以及監測、解決網路問題並強化效能之人員。"]
    ]
    $('#table_id_example10').DataTable(
        {
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
            ],
            data: data10,
        },
    );
    let data11 = [["9999999", "未定義",
    '<div class="selfTablecContainer">\
        <button type="button" class="selfTableFunctionEdit" >\
             <i class="far fa-edit"></i>\
        </button>\
        <button type="button" class="selfTableFunctionTrash">\
            <i class="far fa-trash-alt"></i>\
        </button> \
    </div>']]
    $('#table_id_example11').DataTable(
        {
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
            ],
            data: data11,
        }
    );

    $(".systemHeaderContainer").load("system-header(public).html", function () {
        var menuFlag = 0;
        $('.b2').css('display', 'none');
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
        $('.c1').css('display', 'block');
    })

});