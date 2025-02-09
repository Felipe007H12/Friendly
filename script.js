// Função para curtir
document.querySelectorAll('.curtir').forEach(button => {
    button.addEventListener('click', function() {
        const coracao = this.querySelector('.coracao');
        this.classList.toggle('curtido');

        if (this.classList.contains('curtido')) {
            coracao.style.color = '#e74c3c'; // Muda a cor do coração para vermelho
            this.style.backgroundColor = '#e74c3c';
            this.style.color = 'white';
            
            // Adiciona o efeito do coração flutuante
            const coracaoFlutuante = document.querySelector('.coracao-flutuante');
            coracaoFlutuante.style.display = 'block';
            coracaoFlutuante.style.left = `${this.getBoundingClientRect().left + this.offsetWidth / 2}px`;
            coracaoFlutuante.style.top = `${this.getBoundingClientRect().top}px`;

            // Esconde o coração flutuante após a animação
            setTimeout(() => {
                coracaoFlutuante.style.display = 'none';
            }, 2000); // Tempo igual ao da animação
        } else {
            coracao.style.color = '#3498db'; // Cor original do coração
            this.style.backgroundColor = 'transparent';
            this.style.color = '#3498db';
        }
    });
});

// Função para comentar
document.querySelectorAll('.comentar-btn').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const comentario = input.value.trim();
        if (comentario) {
            const ul = this.closest('.postagem').querySelector('.comentarios-lista');
            const li = document.createElement('li');
            li.textContent = comentario;
            ul.appendChild(li);
            input.value = ''; // Limpa o campo de input após o comentário
        }
    });
});
