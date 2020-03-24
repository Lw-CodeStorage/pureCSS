$(document).ready(function () {
    let data = [
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ],

    ];

    $('#table_id_example1').DataTable(
        {
            responsive: true,
            data: data,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 }
            ]
        },

    );
    $('#table_id_example2').DataTable(
        {
            responsive: true,
            data: data,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 }
            ]
        },

    );
    $('#table_id_example3').DataTable(
        {
            responsive: true,
            data: data,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 }
            ]
        },

    );
    $('#table_id_example4').DataTable(
        {
            responsive: true,
            data: data,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 }
            ]
        },

    );
    $('#table_id_example5').DataTable(
        {
            responsive: true,
            data: data,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 }
            ]
        },

    );

  
});

$(document).ready(function () {
  
    $(".systemHeaderContainer").load("system-header(public).html", function () {
        var menuFlag = 0;
        $('.m1').css('display','block');
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
      
  /*header DOM載入 與 sidaBar動作載入*/

        function editEvent(event) {
            $('#event-modal input[name="event-index"]').val(event ? event.id : '');
            $('#event-modal input[name="event-name"]').val(event ? event.name : '');
            $('#event-modal input[name="event-location"]').val(event ? event.location : '');
            $('#event-modal input[name="event-start-date"]').datepicker('update', event ? event.startDate : '');
            $('#event-modal input[name="event-end-date"]').datepicker('update', event ? event.endDate : '');
            $('#event-modal').modal();
        }

        function deleteEvent(event) {
            var dataSource = $('#calendar').data('calendar').getDataSource();

            for (var i in dataSource) {
                if (dataSource[i].id == event.id) {
                    dataSource.splice(i, 1);
                    break;
                }
            }

            $('#calendar').data('calendar').setDataSource(dataSource);
        }

        function saveEvent() {
            var event = {
                id: $('#event-modal input[name="event-index"]').val(),
                name: $('#event-modal input[name="event-name"]').val(),
                location: $('#event-modal input[name="event-location"]').val(),
                startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
                endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
            }

            var dataSource = $('#calendar').data('calendar').getDataSource();

            if (event.id) {
                for (var i in dataSource) {
                    if (dataSource[i].id == event.id) {
                        dataSource[i].name = event.name;
                        dataSource[i].location = event.location;
                        dataSource[i].startDate = event.startDate;
                        dataSource[i].endDate = event.endDate;
                    }
                }
            }
            else {
                var newId = 0;
                for (var i in dataSource) {
                    if (dataSource[i].id > newId) {
                        newId = dataSource[i].id;
                    }
                }

                newId++;
                event.id = newId;

                dataSource.push(event);
            }

            $('#calendar').data('calendar').setDataSource(dataSource);
            $('#event-modal').modal('hide');
        }

        $(function () {
            var currentYear = new Date().getFullYear();

            $('#calendar').calendar({
                language: 'zh-TW',
                enableContextMenu: true,
                enableRangeSelection: true,
                contextMenuItems: [
                    {
                        text: 'Update',
                        click: editEvent
                    },
                    {
                        text: 'Delete',
                        click: deleteEvent
                    }
                ],
                selectRange: function (e) {
                    editEvent({ startDate: e.startDate, endDate: e.endDate });
                },
                mouseOnDay: function (e) {
                    if (e.events.length > 0) {
                        var content = '';

                        for (var i in e.events) {
                            content += '<div class="event-tooltip-content">'
                                + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
                                + '<div class="event-location">' + e.events[i].location + '</div>'
                                + '</div>';
                        }

                        $(e.element).popover({
                            trigger: 'manual',
                            container: 'body',
                            html: true,
                            content: content
                        });

                        $(e.element).popover('show');
                    }
                },
                mouseOutDay: function (e) {
                    if (e.events.length > 0) {
                        $(e.element).popover('hide');
                    }
                },
                dayContextMenu: function (e) {
                    $(e.element).popover('hide');
                },
                dataSource: [
                    {
                        id: 0,
                        name: 'Google I/O',
                        location: 'San Francisco, CA',
                        startDate: new Date(currentYear, 4, 28),
                        endDate: new Date(currentYear, 4, 29)
                    },
                    {
                        id: 1,
                        name: 'Microsoft Convergence',
                        location: 'New Orleans, LA',
                        startDate: new Date(currentYear, 2, 16),
                        endDate: new Date(currentYear, 2, 19)
                    },
                    {
                        id: 2,
                        name: 'Microsoft Build Developer Conference',
                        location: 'San Francisco, CA',
                        startDate: new Date(currentYear, 3, 29),
                        endDate: new Date(currentYear, 4, 1)
                    },
                    {
                        id: 3,
                        name: 'Apple Special Event',
                        location: 'San Francisco, CA',
                        startDate: new Date(currentYear, 8, 1),
                        endDate: new Date(currentYear, 8, 1)
                    },
                    {
                        id: 4,
                        name: 'Apple Keynote',
                        location: 'San Francisco, CA',
                        startDate: new Date(currentYear, 8, 9),
                        endDate: new Date(currentYear, 8, 9)
                    },
                    {
                        id: 5,
                        name: 'Chrome Developer Summit',
                        location: 'Mountain View, CA',
                        startDate: new Date(currentYear, 10, 17),
                        endDate: new Date(currentYear, 10, 18)
                    },
                    {
                        id: 6,
                        name: 'F8 2015',
                        location: 'San Francisco, CA',
                        startDate: new Date(currentYear, 2, 25),
                        endDate: new Date(currentYear, 2, 26)
                    },
                    {
                        id: 7,
                        name: 'Yahoo Mobile Developer Conference',
                        location: 'New York',
                        startDate: new Date(currentYear, 7, 25),
                        endDate: new Date(currentYear, 7, 26)
                    },
                    {
                        id: 8,
                        name: 'Android Developer Conference',
                        location: 'Santa Clara, CA',
                        startDate: new Date(currentYear, 11, 1),
                        endDate: new Date(currentYear, 11, 4)
                    },
                    {
                        id: 9,
                        name: 'LA Tech Summit',
                        location: 'Los Angeles, CA',
                        startDate: new Date(currentYear, 10, 17),
                        endDate: new Date(currentYear, 10, 17)
                    }
                ]
            });

            $('#save-event').click(function () {
                saveEvent();
            });
        });
    });
    $(".menuContainer").load("system-sideMenu(public).html",function(){
        $('.m2').css('display','none');
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

        /*子項表單展開*/
        var subItemFlag = 0;
        $('.more1').click(function (e) {
            e.preventDefault();
            if (subItemFlag == 0) {
                $(this).siblings('.subItem').css({
                    'height': '100px',
                    'transition': '0.3s'
                });
            }
        });
        /*子項顏色標記狀態切換*/
        $('.more1-1').click(function (e) {
            $(this).addClass('menuSubLight')
            $(this).siblings().removeClass('menuSubLight');
        });
        $('.more1-2').click(function (e) {
            $(this).addClass('menuSubLight')
            $(this).siblings().removeClass('menuSubLight');
        });
        $('.more1-3').click(function (e) {
            $(this).addClass('menuSubLight')
            $(this).siblings().removeClass('menuSubLight');
        });
    })
});
