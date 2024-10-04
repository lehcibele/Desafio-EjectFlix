const btnPraCadastrar = document.getElementById('btn-para-cadastrar');
const btnCadastrar = document.getElementById('btn-cadastrar');
const btnLogar = document.getElementById('btn-logar');

/* Evento de click para alternar entre login e cadastro */
btnPraCadastrar.addEventListener('click', () => {
    const secaoLogin = document.getElementById('secao-login');
    const secaoCadastro = document.getElementById('secao-cadastro');

    secaoLogin.style.display = 'none';
    secaoCadastro.style.display = 'block';
});

/* Evento de click para quando o usuário digitar seu login e for correto ir para página principal (index) */
btnLogar.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.getElementById('username-login').value;
    const senha = document.getElementById('password-login').value;
    const msgErro = document.getElementById('msgErro');

    const validarNome = "leticia";
    const validarSenha = "senha123";

    if (nome === validarNome && senha === validarSenha) {
        window.location.href = "../../index.html";
    } else {
        msgErro.innerHTML = `Usuário ou senha incorreto! Tente novamente`;
    }

});