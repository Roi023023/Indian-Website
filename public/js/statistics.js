// Retrieve the data object passed from the server
let priceRangeCounts = JSON.parse(document.getElementById("priceData").textContent);

// Prepare labels and data
let labels = Object.keys(priceRangeCounts);
let data = Object.values(priceRangeCounts);

// Create the bar chart
var ctxB = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: labels,  // ["0-10", "11-20", "21-30"]
    datasets: [{
      label: 'Number of Products',
      data: data,  // Replace with the data array
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

