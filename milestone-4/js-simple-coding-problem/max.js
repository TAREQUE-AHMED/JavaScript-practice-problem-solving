// let business = 350;
// let minister = 150;
// let chamca = 50;
// if (business > minister && business > chamca) {
//     console.log("Business Man");
// }
// else if (minister > business && minister > chamca) {
//     console.log("Minister");
// }
// else {
//     console.log("Chamca");
// }
function findLargest(number1, number2) {
    if (number1 > number2) {
        return true;
    }
    else {
        return false;
    }
}
let result = findLargest(20, 15);
console.log(result);