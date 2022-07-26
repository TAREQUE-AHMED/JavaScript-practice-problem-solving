function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if (lowest > element) {
            lowest= element;
        }
    }
    return lowest;
}
let ages = [10, 5, 2, 7, 9];
let lowest = lowestElement(ages);
console.log(lowest);