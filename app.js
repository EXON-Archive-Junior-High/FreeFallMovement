const ctx = document.getElementById('myChart').getContext('2d');
const g = 9.8
const arr = []
const z = []
for (let i = 0; i < 100; i++) {
    arr.push(g*i*i/2)
    z.push(i)
}

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: z,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: arr
        }]
    },

    // Configuration options go here
    options: {}
})