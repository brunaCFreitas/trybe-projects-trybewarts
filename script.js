const buttonLogin = document.getElementById('button-login');
const formLogin = document.getElementById('form-login');
const agreementCheckbox = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');

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
