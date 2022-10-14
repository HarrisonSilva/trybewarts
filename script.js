function validaHeader() {
  const email = document.getElementById('header-email');
  const senha = document.getElementById('header-senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function clicaButao() {
  const btnHeader = document.getElementsByClassName('btn-send')[0];
  btnHeader.addEventListener('click', validaHeader);
}

clicaButao();

const checkBox = document.getElementById('agreement');
const btn = document.getElementById('submit-btn');
btn.disabled = true;

function clicaCheckBox() {
  if (checkBox.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkBox.addEventListener('click', clicaCheckBox);
