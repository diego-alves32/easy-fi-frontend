function atualizaGrafico({ saldo, totalReceitas, totalDespesas }) {
  const canvas = document.getElementById("transactionChart");
  const ctx = canvas.getContext("2d");

  if (totalReceitas === 0 && totalDespesas === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "16px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(
      "Nenhum dado disponível para exibir.",
      canvas.width / 2,
      canvas.height / 2
    );
    return;
  }

  const data = {
    labels: ["Receitas", "Despesas"],
    datasets: [
      {
        label: "Distribuição de Transações",
        data: [totalReceitas, totalDespesas],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: "#fff",
            font: {
              size: 18,
            },
            padding: 50,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) {
                label += ": ";
              }
              label += "R$ " + context.raw.toLocaleString();
              return label;
            },
          },
        },
      },
    },
  };
  //const ctx = document.getElementById("transactionChart").getContext("2d");
  new Chart(ctx, config);
}
