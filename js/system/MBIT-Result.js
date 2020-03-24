$(document).ready(function () {
    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            minBarLength:  2,
            labels: ["E","I"],
            datasets: [
                {
                   
                    data: [20,7]
                },

            ]
        },
        options: {maintainAspectRatio: true,
            responsive:true,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:25,
                        min:0
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart2');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            minBarLength:  2,
            labels: ["E","I"],
            datasets: [
                {
                   
                    data: [20,7]
                },

            ]
        },
        options: {maintainAspectRatio: true,
            responsive:true,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:25,
                        min:0
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart3');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            
            minBarLength:  2,
            labels: ["E","I"],
            datasets: [
                {
                   
                    data: [20,7]
                },

            ]
        },
        options: {
            responsive:true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:25,
                        min:0
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart4');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            minBarLength:  2,
            labels: ["E","I"],
            datasets: [
                {
                   
                    data: [20,7]
                },

            ]
        },
        options: {
            maintainAspectRatio: true,
            responsive:true,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:25,
                        min:0
                    }
                }]
            }
        }
    });
});