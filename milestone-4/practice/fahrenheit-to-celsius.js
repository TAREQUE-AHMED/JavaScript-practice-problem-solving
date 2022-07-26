
// function celsiusToFahrenheit(celsius) {
//     let fahren = celsius * 9 / 5 + 32;
//     return fahren;
// }
// const myFahrein = celsiusToFahrenheit(12);
// console.log(myFahrein);
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const myCelsius = fahrenheitToCelsius(144);
console.log(myCelsius);