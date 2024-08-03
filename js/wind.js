// Get the chart element
const windChartElement = document.getElementById('wind-chart');

// Check if the element exists
if (windChartElement) {
  // Get the chart context
  const windCtx = windChartElement.getContext('2d');

  // Define the chart data
  const windChartData = {
    labels: ['Jan', 'Feb', 'Mar'], 
    datasets: [{
      label: 'Wind Speed',
      data: [], // Initialize with empty data
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  // Create the chart
  const windChart = new Chart(windCtx, {
    type: 'line',
    data: windChartData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Function to update chart data
  function updateChartData() {
    const windSpeeds = [15, 10, 20]; // Replace with actual data
    windChart.data.datasets[0].data = windSpeeds;
    windChart.update();
  }

  // Call updateChartData function every 10 seconds
  setInterval(updateChartData, 10000);
} else {
  console.error('Wind chart element not found');
}