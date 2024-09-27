const formularioLogin = document.getElementById('formulario-login');
const formularioCadastro = document.getElementById('formulario-cadastro');
const btnCadastrar = document.getElementById('btn-cadastrar');
const btnEntrar = document.getElementById('btn-entrar');

/* Evento de click para mudar entra a seção de login e cadastro */
btnCadastrar.addEventListener('click', () => {
    formularioLogin.style.display = 'none';
    formularioCadastro.style.display = 'block';
});

/* Evento de click para quando o usuário digitar seu login e for correto ir para página principal (index) */
btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const msgErro = document.getElementById('msgErro');

    const validarNome = "leticia";
    const validarSenha = "senha123";

    if (nome === validarNome && senha === validarSenha) {
        window.location.href = "index.html";
    } else {
        msgErro.innerHTML = `Usuário ou senha incorreto! Tente novamente`;
    }

});