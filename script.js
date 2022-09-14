const buttonLogin = document.getElementById('button-login');
const formLogin = document.getElementById('form-login');
const agreementCheckbox = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const email = formLogin.email.value;
  const senha = formLogin.password.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

agreementCheckbox.addEventListener('change', () => {
  btnSubmitForm.disabled = !agreementCheckbox.checked;
});

textarea.addEventListener('input', () => {
  const leftChars = 500 - textarea.value.length;
  counter.innerText = leftChars;
});
