document.getElementById('searchButton').addEventListener('click', function() {
    const filterType = document.getElementById('filterType').value;
    const categoria = document.getElementById('categoriaInput').value;
    const id = document.getElementById('idInput').value;
    const data = document.getElementById('dateInput').value;

    filtrarTransacoes(filterType, categoria, id, data);
});

document.getElementById('viewAllButton').addEventListener('click', function() {
    filtrarTransacoes();
});

function filtrarTransacoes(filterType, categoria = '', id = '', data = '') {
    const transacoes = [
        { id: '1', tipo: 'despesas', categoria: 'alimentacao', data: '2023-10-01', descricao: 'Compra no mercado', valor: -100 },
        { id: '2', tipo: 'receitas', categoria: 'salario', data: '2023-10-05', descricao: 'Salário', valor: 2000 },
        { id: '3', tipo: 'despesas', categoria: 'transporte', data: '2023-10-10', descricao: 'Compra de combustível', valor: -150 }
    ];

    let resultados = transacoes;
    if (filterType === 'categoria' && categoria) {
        resultados = transacoes.filter(transacao => transacao.categoria === categoria);
    } else if (filterType === 'id' && id) {
        resultados = transacoes.filter(transacao => transacao.id === id);
    } else if (filterType === 'data' && data) {
        resultados = transacoes.filter(transacao => transacao.data === data);
    }

    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(transacao => {
            const transacaoItem = document.createElement('div');
            transacaoItem.classList.add('transacao-item');
            transacaoItem.innerHTML = `
                <span><strong>ID:</strong> ${transacao.id}</span>
                <span><strong>Tipo:</strong> ${transacao.tipo}</span>
                <span><strong>Categoria:</strong> ${transacao.categoria}</span>
                <span><strong>Data:</strong> ${transacao.data}</span>
                <span><strong>Descrição:</strong> ${transacao.descricao}</span>
                <span><strong>Valor:</strong> R$ ${transacao.valor.toLocaleString()}</span>
                <button class="edit-button" onclick="editarTransacao(${transacao.id})">Editar</button>
                <button class="delete-button" onclick="deletarTransacao(${transacao.id})">Deletar</button>
            `;
            transactionList.appendChild(transacaoItem);
        });
    } else {
        transactionList.innerHTML = '<p>Nenhuma transação encontrada.</p>';
    }
}

// Função para redirecionar ao editar
function editarTransacao(id) {
    window.location.href = `transaction-form.html?id=${id}`;
}

// Função para confirmação de exclusão
function deletarTransacao(id) {
    if (confirm("Deseja realmente excluir esta transação?")) {
        // Logica para deletar a transação do backend ou do array
        alert(`Transação com ID ${id} deletada com sucesso.`);
    }
}