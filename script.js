const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
