// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // primero pasamos de dólares a euros, luego a yenes
    let euros = valueInDollar / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}

// Convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    // primero pasamos de yenes a euros, luego a libras
    let euros = valueInYen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

const sum = (a,b) => {
    return a + b
}

module.exports = { 
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};