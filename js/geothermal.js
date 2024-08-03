
const data = [
    {
        name: "Geothermal Energy",
        description: "Geothermal energy is a type of renewable energy that uses heat from the Earth's interior to generate electricity.",
        image: "geothermal-image.jpg",
        stats: [
            { label: "Installed Capacity:", value: "13,000 MW" },
            { label: "Global Generation:", value: "70,000 GWh" },
            { label: "Carbon Emissions Reduction:", value: "50 million tons" }
        ]
    }
];


const ctx = document.getElementById('geothermal-chart').getContext('2d');

const chartData = {
    labels: ['2000', '2005', '2010', '2015', '2020'],
    datasets: [{
        label: 'Geothermal Power Generation (GWh)',
        data: [1000, 1500, 2000, 2500, 3000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const options = {
    title: {
        display: true,
        text: 'Geothermal Power Generation (GWh)'
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: options
});
