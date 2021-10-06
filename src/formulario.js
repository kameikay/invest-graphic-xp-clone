// SLIDER

let slider = document.getElementById("rangeSlider");
let outputEl = document.querySelector(".invest-value");

function decimalSeparator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

outputEl.textContent = `${decimalSeparator(slider.value)}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  outputEl.textContent = `${decimalSeparator(this.value)}`;
};

// Selected buttons

const buttonAcimaInflacao = document.querySelector("#acimaInflacao");
const buttonLongoPrazo = document.querySelector("#longoPrazo");
const buttonMaximizarGanhos = document.querySelector("#maximizarGanhos");

const buttonAteUm = document.querySelector("#ateUm");
const buttonEntreUmEDois = document.querySelector("#entreUmEDois");
const buttonMaisDeDois = document.querySelector("#maisDeDois");

const buttonSimular = document.querySelector("#simular");
const buttonRetornar = document.querySelector('.simular-novamente')

const buttonsObjetivo = [
  buttonAcimaInflacao,
  buttonLongoPrazo,
  buttonMaximizarGanhos,
];
const buttonsResgate = [buttonAteUm, buttonEntreUmEDois, buttonMaisDeDois];

let selectedObjetivo = null;
let selectedResgate = null;

function handleObjetivosButtonsClick(e) {
  e.preventDefault();

  e.target.classList.add("active");
  selectedObjetivo = e.target.value;

  if (e.target.id === "acimaInflacao") {
    buttonLongoPrazo.classList.remove("active");
    buttonMaximizarGanhos.classList.remove("active");
  } else if (e.target.id === "longoPrazo") {
    buttonAcimaInflacao.classList.remove("active");
    buttonMaximizarGanhos.classList.remove("active");
  } else if (e.target.id === "maximizarGanhos") {
    buttonAcimaInflacao.classList.remove("active");
    buttonLongoPrazo.classList.remove("active");
  }
}

function handleResgateButtonsclick(e) {
  e.preventDefault();

  e.target.classList.add("active");
  selectedResgate = e.target.value;

  if (e.target.id === "ateUm") {
    buttonEntreUmEDois.classList.remove("active");
    buttonMaisDeDois.classList.remove("active");
  } else if (e.target.id === "entreUmEDois") {
    buttonAteUm.classList.remove("active");
    buttonMaisDeDois.classList.remove("active");
  } else if (e.target.id === "maisDeDois") {
    buttonAteUm.classList.remove("active");
    buttonEntreUmEDois.classList.remove("active");
  }
}

buttonsObjetivo.forEach((button) => {
  button.addEventListener("click", handleObjetivosButtonsClick);
});

buttonsResgate.forEach((button) => {
  button.addEventListener("click", handleResgateButtonsclick);
});

const formContainer = document.querySelector('.container')
const divResult = document.querySelector('.result')


buttonSimular.addEventListener("click", (e) => {
  e.preventDefault();
  divResult.classList.remove('display-hidden')
  formContainer.classList.add('display-hidden')
});

buttonRetornar.addEventListener('click', (e) => {
  e.preventDefault()
  formContainer.classList.remove('display-hidden')
  divResult.classList.add('display-hidden')
})

// SELEÇÃO DE BOTÕES

const divCarteiraRecomendada = document.querySelector('.carteira-recomendada__container')
const divRentabilidadeHistorica = document.querySelector('.rentabilidade-historica__container')

const btnCarteiraRecomendada = document.querySelector(
  ".btn-carteira-recomendada"
);
const btnRentabilidadeHistorica = document.querySelector(
  ".btn-rentabilidade-historica"
);
const buttonsSelect = [btnCarteiraRecomendada, btnRentabilidadeHistorica];

buttonsSelect.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className === "btn-carteira-recomendada") {
      btnCarteiraRecomendada.classList.add("btn--active");
      divCarteiraRecomendada.classList.remove('display-hidden')

      btnRentabilidadeHistorica.classList.remove("btn--active");
      divRentabilidadeHistorica.classList.add('display-hidden');
    } else if (btn.className === "btn-rentabilidade-historica") {
      btnRentabilidadeHistorica.classList.add("btn--active");
      divRentabilidadeHistorica.classList.remove('display-hidden')

      btnCarteiraRecomendada.classList.remove("btn--active");
      divCarteiraRecomendada.classList.add('display-hidden')
    }
  });
});
