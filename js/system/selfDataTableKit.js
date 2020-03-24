$(document).ready(function () {
    // let data11 = [["9999999", "未定義",
    //     '<div class="selfTablecContainer">\
    //     <button type="button" class="selfTableFunctionEdit" >\
    //          <i class="far fa-edit"></i>\
    //     </button>\
    //     <button type="button" class="selfTableFunctionTrash">\
    //         <i class="far fa-trash-alt"></i>\
    //     </button> \
    // </div>']];
    //data的資料格式為[第一列[第nRow],第二列[第nRow]]
    let checkBox = [['<input type="checkbox" name="vehicle1" value="Bike">', '<input type="checkbox" name="vehicle1" value="Bike">','<input type="checkbox" name="vehicle1" value="Bike">'],
    ['<input type="checkbox" name="vehicle1" value="Bike">', '<input type="checkbox" name="vehicle1" value="Bike">','<input type="checkbox" name="vehicle1" value="Bike">'],
    ['<input type="checkbox" name="vehicle1" value="Bike">', '<input type="checkbox" name="vehicle1" value="Bike">','<input type="checkbox" name="vehicle1" value="Bike">']]

    let columns = [
        { "title": "Zero" },
        { "title": "One" },
        { "title": "Two" }

    ];
    $('#table_id_example11').DataTable(
        {
            columns: columns,
            data: checkBox
        })
});