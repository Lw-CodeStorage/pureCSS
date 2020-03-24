$(document).ready(function () {
    var ctx = document.getElementById("myChart1");
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
          label: '# of Tomatoes',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
           cutoutPercentage: 40,
        responsive: false,
    
      }
    });
    var ctx = document.getElementById('myChart2');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            minBarLength:  2,
            labels: ["E","I","w"],
            datasets: [
                {
                   
                    data: [20,7,5]
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

});
