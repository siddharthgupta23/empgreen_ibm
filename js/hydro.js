
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Water Usage (liters)',
        data: [300, 250, 320, 400, 360, 420, 500],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};


const config = {
    type: 'bar',
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


window.onload = function() {
    const ctx = document.getElementById('hydroChart').getContext('2d');
    new Chart(ctx, config);
};
