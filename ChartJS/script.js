let chart = document.querySelector("#chart")
new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        },
        {
            label: '# of Votes',
            data: [20, 19, 3, 5, 2, 3],
            borderWidth: 1
        }
        ],
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label:function (context) {
                        let label=context
                        console.log(label)
                        return `Votes ${label.raw}`
                    }
                }
            }
        }
    }
});