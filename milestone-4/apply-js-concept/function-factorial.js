function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let fristFactorial = getFactorial(7);
console.log(fristFactorial);