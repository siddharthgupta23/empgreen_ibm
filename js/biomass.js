
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Biomass Production (tons)',
        data: [500, 600, 700, 800, 750, 850, 900],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Configuration for the chart
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the chart
window.onload = function() {
    const ctx = document.getElementById('biomassChart').getContext('2d');
    new Chart(ctx, config);
};
