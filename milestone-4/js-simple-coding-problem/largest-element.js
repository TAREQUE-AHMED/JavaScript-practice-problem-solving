function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [10, 25, 98, 14, 18, 19];
const oldest = findLargest(ages);
console.log(oldest);