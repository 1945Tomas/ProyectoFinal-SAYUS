
const graficos = document.querySelector("#tanquesGrafico");



const data = {
    labels: ['Aliados', 'Alemania', 'Unión Soviética'],
    datasets: [{
        label: 'Producción de Tanques',
        data: [240000 , 25000, 85000],
        backgroundColor: ['blue', 'orange', 'red'],
        borderColor: ['black', 'black', 'black'],
        borderWidth: 1
    }, ]
};

const formato = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const myChart = new Chart (graficos, formato);