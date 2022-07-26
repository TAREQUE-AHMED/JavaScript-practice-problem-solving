// function getFactorial(number) {
//     factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(5);
// console.log(myFactorial);
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);