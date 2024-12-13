function abrirModal(titulo, imgSrc, descricao, preco, ingredientes) {
    document.getElementById('modal-titulo').textContent = titulo;
    document.getElementById('modal-img').src = 'imgs/' + imgSrc;
    document.getElementById('modal-descricao').textContent = descricao;
    document.getElementById('modal-preco').textContent = preco;
    document.getElementById('modal-ingredientes').textContent = ingredientes;
    document.getElementById('modal').style.display = "block";
}

function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        fecharModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && sobrenome && email && mensagem) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });

    const testemunhos = document.querySelectorAll('.testemunhos-container blockquote');
    let currentTestemunho = 0;

    testemunhos.forEach(function(testemunho) {
        testemunho.style.display = 'none';
    });

    testemunhos[currentTestemunho].style.display = 'block';

    setInterval(function() {
        testemunhos[currentTestemunho].style.display = 'none';
        currentTestemunho = (currentTestemunho + 1) % testemunhos.length;
        testemunhos[currentTestemunho].style.display = 'block';
    }, 3000);
});
