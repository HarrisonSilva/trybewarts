const sectionForm = document.getElementById('formSection');
const formData = document.createElement('form');
formData.id = 'form-data';

function showName(name, lastName) {
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name} ${lastName}`;
  formData.appendChild(fullName);
}

function showEmail(email) {
  const emailParagraph = document.createElement('p');
  emailParagraph.innerText = `Email: ${email}`;
  formData.appendChild(emailParagraph);
}

function showHouse() {
  const house = document.getElementById('house').value;
  const casa = document.createElement('p');
  casa.innerText = `Casa: ${house}`;
  formData.appendChild(casa);
}

function showMaterias() {
  const materias = document.getElementsByClassName('subject');
  const favorite = document.createElement('p');
  const vetor = [];
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      vetor.push(` ${materias[index].value}`);
    }
  }
  favorite.innerText = `Matérias: ${vetor}`;
  formData.appendChild(favorite);
}

function showFamily() {
  const family = document.getElementsByName('family');
  const favoriteFamily = document.createElement('p');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      favoriteFamily.innerText = `Família: ${family[index].value}`;
    }
  }
  formData.appendChild(favoriteFamily);
}

function showAvaliacao() {
  const rate = document.getElementsByName('rate');
  const rateChoose = document.createElement('p');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      rateChoose.innerText = `Avaliação: ${rate[index].value}`;
    }
  }
  formData.appendChild(rateChoose);
}

function showObservacao() {
  const avaliacao = document.getElementById('textarea');
  const avaliacaoParagraph = document.createElement('p');
  avaliacaoParagraph.innerText = `Observações: ${avaliacao.value}`;
  formData.appendChild(avaliacaoParagraph);
}

function showData() {
  const inputs = document.getElementsByTagName('input');
  const form = document.getElementById('evaluation-form');
  form.style.display = 'none';
  showName(inputs[2].value, inputs[3].value);
  showEmail(inputs[4].value);
  showHouse();
  showFamily();
  showMaterias();
  showAvaliacao();
  showObservacao();
  sectionForm.appendChild(formData);
}

function displayNone(event) {
  event.preventDefault();
  showData();
}

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
    btn.addEventListener('click', displayNone);
  } else {
    btn.disabled = true;
  }
}

checkBox.addEventListener('click', clicaCheckBox);

function alteraContador() {
  const textarea = document.getElementById('textarea');
  const span = document.getElementById('counter');
  const tamanho = 500 - textarea.value.length;
  span.innerText = tamanho;
}

const textarea = document.getElementById('textarea');
textarea.addEventListener('input', alteraContador);
