const data = {
    labels: [ "Saldo atual", "Receitas", "Despesas", ],
    datasets: [{
        label: "Distribuição de Transações",
        data: [1200, 3000, 800],
        backgroundColor: [ "#FFCE56", "#36A2EB", "#FF6384",],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', 
                labels:{
                    color: '#fff',
                    font: {
                        size: 18
                    },
                    padding: 50
                }
                
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += 'R$ ' + context.raw.toLocaleString();
                        return label;
                    }
                }
            }
        }
    }
};

window.onload = function () {
    const ctx = document.getElementById('transactionChart').getContext('2d');
    new Chart(ctx, config);
};