const btnAdicionarFilmes = document.getElementById('btn-adicionar-filmes');
const modalAdicionarFilme = document.getElementById('modal-adicionar-filme');
const iconeFecharModal = document.getElementById('icone-fechar-modal');

btnAdicionarFilmes.addEventListener('click', () => {
    modalAdicionarFilme.style.display = 'block';
});

iconeFecharModal.addEventListener('click', () => {
    modalAdicionarFilme.style.display = 'none';
})
