const convertbutton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelect1 = document.querySelector(".currency-select1");


async function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueToConverted = document.querySelector(".currency-value");
    


    const fromCurrency = currencySelect1.value; // De
    const toCurrency = currencySelect.value;    // Para

    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        alert("Digite um valor válido maior que 0");
        return;
    }

    try {
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL");
        const data = await response.json();

        const rates = {
            real: 1,
            dolar: parseFloat(data.USDBRL.high),
            euro: parseFloat(data.EURBRL.high),
            libra: parseFloat(data.GBPBRL.high),
            bitcoin: parseFloat(data.BTCBRL.high)
        };

        // Converter de moeda origem para BRL
        let valueInBRL = fromCurrency === "real"
            ? inputCurrencyValue
            : inputCurrencyValue * rates[fromCurrency];

        // Converter de BRL para moeda destino
        let convertedValue = toCurrency === "real"
            ? valueInBRL
            : valueInBRL / rates[toCurrency];

        // Exibir valor original
        const fromCurrencyCode = {
            real: "BRL",
            dolar: "USD",
            euro: "EUR",
            libra: "GBP",
            bitcoin: "BTC"
        }[fromCurrency];

        const toCurrencyCode = {
            real: "BRL",
            dolar: "USD",
            euro: "EUR",
            libra: "GBP",
            bitcoin: "BTC"
        }[toCurrency];

        currencyValueToConvert.innerHTML = fromCurrency === "bitcoin"
            ? inputCurrencyValue.toFixed(6) + " BTC"
            : new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: fromCurrencyCode
            }).format(inputCurrencyValue);

        currencyValueToConverted.innerHTML = toCurrency === "bitcoin"
            ? convertedValue.toFixed(6) + " BTC"
            : new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: toCurrencyCode
            }).format(convertedValue);

    } catch (error) {
        console.error("Erro na conversão", error);
        alert("Erro ao converter moedas. Verifique a conexão com a internet.");
    }
}



function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    
    if (currencySelect.value == "dolar") {
    
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/img/estados-unidos (1) 1.png "
    
    }
    
    if (currencySelect.value == "euro") {
    
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/euro.png"
    
    }
    
    if (currencySelect.value == "libra") {
    
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/img/libra 1.png"
    
    }
    
    if (currencySelect.value == "bitcoin") {
    
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/img/bitcoin 1.png"
    
    }
    
    if (currencySelect.value == "real") {
    
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/img/real.png"
    
    }
    
    
    
    
    convertValues()
    
    
    }

function changeCurrency1() {

    const currencyName1 = document.getElementById("currency-name1")
    const currencyImage0 = document.querySelector(".currency-img-0")

    if (currencySelect1.value == "real") {
        currencyName1.innerHTML = "Real"
        currencyImage0.src = "./assets/img/real.png"
    }

    if (currencySelect1.value == "dolar") {

        currencyName1.innerHTML = "Dólar americano"
        currencyImage0.src = "./assets/img/estados-unidos (1) 1.png "

    }
    if (currencySelect1.value == "euro") {

        currencyName1.innerHTML = "Euro"
        currencyImage0.src = "./assets/img/euro.png"

    }

    if (currencySelect1.value == "libra") {

        currencyName1.innerHTML = "Libra"
        currencyImage0.src = "./assets/img/libra 1.png"

    }

    if (currencySelect1.value == "bitcoin") {

        currencyName1.innerHTML = "Bitcoin"
        currencyImage0.src = "./assets/img/bitcoin 1.png"

    }


    convertValues()


}

currencySelect1.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)