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
