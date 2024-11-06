// Aplica a animação de fade-in ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// Adiciona a animação de saída quando o usuário clica em um link para outra página
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        // Impede o link de carregar imediatamente a próxima página
        event.preventDefault();

        // Adiciona a classe fade-out para a animação de saída
        document.body.classList.add("fade-out");

        // Espera o tempo da animação antes de navegar para a nova página
        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // o tempo de espera deve coincidir com a duração da animação
    });

    function cadastrarUsuario(){
        alert()
    }
 
});
