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
    // );．
    $('#questionTable').dataTable(
        {
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
            ],
            data: [
                ['a','b','c'], ['a','b','c'], ['a','b','c'], ['a','b','c'], ['a','b','c']
            ],
        }
    );
    $('#questionTable2').dataTable(
        {
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
            ],
            data: [
                ['a','b','c'], ['a','b','c'], ['a','b','c'], ['a','b','c'], ['a','b','c']
            ],
        }
    );
    var ctx = document.getElementById('myChart').getContext('2d');
    //chartJS不受css長寬影響，因為他是畫出來的必需一開始就設定
  
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ['R', 'A', 'I', 'S', 'E', 'C'],
            datasets: [{
                data: [80, 10, 48, 27, 100, 20],
                backgroundColor: 'rgba(228,23,73,0.5)  '
            }],
        },

        // Configuration options go here
        options: {

        }
    });

    let data213 = [
        ['a','b','c'],['a','b','c']
        ];

        

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
        $('.m3').css('display', 'block');
    })
});