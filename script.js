const cliqueBotao = document.querySelector('.login-button');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');

function validaBotao(clique) {
  clique.preventDefault();
  if (
    inputEmail.value === 'tryber@teste.com'
    && inputSenha.value === '123456'
  ) {
    alert('Olá, Tryber!!');
  } else if (
    inputEmail.value !== 'tryber@teste.com'
    || inputSenha.value !== '123456'
  ) {
    alert('Email ou senha inválidos.');
  }
}

cliqueBotao.addEventListener('click', validaBotao);
