$(document).ready(function () {

    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ['D', 'I', 'S', 'C', 'B'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [4, 2, 10, 3, 0],
                fill: false,
                borderWidth: 3,
                //改變拋物線呈現方式
                lineTension: 0,
                borderColor: 'rgb(63,181,179)',
                label: "M : 別人期望的我"

            }]
        },

        options: {
            //標題位置
            legend: {
                position: 'bottom',
            },
            //y軸值
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 1,
                        max: 25
                    }
                }],
            }
        }
    });
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            animationEasing: 'linear',
            labels: ['D', 'I', 'S', 'C', 'B'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [8, 6, 2, , 0],
                fill: false,
                // steppedLine: true,
                // 變成數位的樣子
                borderWidth: 3,
                lineTension: 0,
                label: "L : 真實的我"
            }]
        },

        // Configuration options go here
        options: {
         
            //標題位置
            legend: {
                position: 'bottom',
            },
            //y軸值
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 1,
                        max: 25
                    }
                }],
            }
        }
    });
});
