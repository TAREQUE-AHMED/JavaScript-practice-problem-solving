// const fibo = [0, 1];
// for (let i = 2; i <= 12; i++) {
//     //nth= (n-1)th + (n-2)th
//     //ith=(i-1)th + (i-2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);
function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please give a number';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let result = fibonacciSeries(13);
console.log(result);