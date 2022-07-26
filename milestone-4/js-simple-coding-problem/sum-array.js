// const numbers = [10, 15, 14, 20, 25, 29];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);
function arrayTotal(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let total = arrayTotal([10, 15, 14, 20, 25, 29]);
console.log(total);