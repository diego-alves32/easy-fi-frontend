document.getElementById('logout')?.addEventListener('click', function(event) {
    alert("Você foi deslogado com sucesso!");
    
});

document.getElementById('filterType').addEventListener('change', function() {
    const filterType = this.value;
    document.querySelectorAll('.filter-field').forEach(field => field.style.display = 'none');

    if (filterType === 'categoria') {
        document.getElementById('categoriaInput').style.display = 'inline-block';
    } else if (filterType === 'id') {
        document.getElementById('idInput').style.display = 'inline-block';
    } else if (filterType === 'data') {
        document.getElementById('dateInput').style.display = 'inline-block';
    }
});


