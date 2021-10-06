// BITCOIN

const inputNumber = document.querySelector("#inputValue");
const inputValue = document.querySelector("#inputValue").value;
const finalValue = document.querySelector("#finalValue");

const API_URL = "https://economia.awesomeapi.com.br/last/BTC-BRL";


// Função que traz o valor atual do BTC
async function getBTCCurrenciesTicker() {
  const response = await fetch(`${API_URL}`, {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default",
  });

  const data = await response.json();
  return data.BTCBRL.bid.replace('.', '');
}

function refreshValue() {
  const refreshedValue = setInterval(async () => {
    await getBTCCurrenciesTicker()
  }, 3000)

  return refreshedValue
}

// Função que pega o input do valor, multiplica pelo valor do BTC e coloca no span
async function getValue(inputValue) {
  const value = await getBTCCurrenciesTicker();
  const result = value * inputValue;

  const finalResult = new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    },
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  ).format(result);

  finalValue.innerHTML = finalResult;
}

inputNumber.addEventListener("keyup", (e) => {
  getValue(e.target.value);
});
