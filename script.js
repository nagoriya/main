// Get the chart canvas
let ctx = document.getElementById('chart').getContext('2d');

// Initial Chart Data
let chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May","juna","july","Aug"],
    datasets: [{
        label: "Sales",
        data: [10, 20, 30, 40, 50,60,70,80,90,100],
        backgroundColor: "rgba(54, 162, 235, 0.6)"
    }]
};

// Create Chart
let myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData
});

// Function to Update Chart Dynamically
function updateChart() {
    myChart.data.datasets[0].data = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    myChart.update();
}
