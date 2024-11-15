async function buscaDadosFinanceiros() {
  try {
    const response = await fetch(
      "http://localhost:3057/incomes-expenses/buscarExtratoFiltro?userId=1&dataInicio=2024-11-01&dataFim=2024-11-02"
    );
    const data = await response.json();

    if (!response.ok) throw new Error("Erro ao buscar dados da API");

    return data;
  } catch (error) {
    console.error("Erro ao buscar dados financeiros:", error);
  }
}

function trataDadosFinanceiros(data) {
  if (!data) return;

  var totalDespesas = 0;
  var totalReceitas = 0;

  for (i = 0; i < data.extrato.length; i++) {
    if (data.extrato[i].tipo == "receita") {
      totalReceitas += parseFloat(data.extrato[i].valor);
    } else if (data.extrato[i].tipo == "despesa") {
      totalDespesas += parseFloat(data.extrato[i].valor);
    }
  }

  var saldo = totalReceitas - totalDespesas;

  document.getElementById("receita").textContent = `R$ ${totalReceitas.toFixed(
    2
  )}`;
  document.getElementById("despesas").textContent = `R$ ${totalDespesas.toFixed(
    2
  )}`;
  document.getElementById("saldo").textContent = `R$ ${saldo.toFixed(2)}`;

  return { saldo, totalReceitas, totalDespesas };
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await buscaDadosFinanceiros();
  const valoresFinanceiros = trataDadosFinanceiros(data);

  if (valoresFinanceiros) {
    atualizaGrafico(valoresFinanceiros);
  }
});

document.getElementById("logout")?.addEventListener("click", function (event) {
  localStorage.removeItem("usuario");
  window.location.href = "/";
});

document.getElementById("filterType").addEventListener("change", function () {
  const filterType = this.value;
  document
    .querySelectorAll(".filter-field")
    .forEach((field) => (field.style.display = "none"));

  if (filterType === "categoria") {
    document.getElementById("categoriaInput").style.display = "inline-block";
  } else if (filterType === "id") {
    document.getElementById("idInput").style.display = "inline-block";
  } else if (filterType === "data") {
    document.getElementById("dateInput").style.display = "inline-block";
  }
});
