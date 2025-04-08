const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")


async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // value in money
    const currencyValueToConverted = document.querySelector(".currency-value") // outras moedas

console.log(currencySelect)
try { 
   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    

   const real = 1
   const dolar = parseFloat(data.USDBRL.high);
   const euro = parseFloat(data.EURBRL.high);
   const libra = parseFloat(data.GBPBRL.high);
   const bitcoin = parseFloat(data.BTCBRL.high);

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
       style: "currency",
       currency: "BRL"
   }).format(inputCurrencyValue / real);

   let convertedValue;

   if (currencySelect.value === "euro") {
       convertedValue = inputCurrencyValue / euro;
       currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "EUR"
       }).format(convertedValue);
   } else if (currencySelect.value === "dolar") {
       convertedValue = inputCurrencyValue / dolar;
       currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
           style: "currency",
           currency: "USD"
       }).format(convertedValue);
   } else if (currencySelect.value === "libra") {
       convertedValue = inputCurrencyValue / libra;
       currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
           style: "currency",
           currency: "GBP"
       }).format(convertedValue);
   } else if (currencySelect.value === "bitcoin") {
       convertedValue = inputCurrencyValue / bitcoin;
       currencyValueToConverted.innerHTML = convertedValue.toFixed(6) + " BTC"; // Bitcoin normalmente não usa formatação de moeda
   }
   

} catch (error) {
   console.error("Erro ao buscar dados da API", error);

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