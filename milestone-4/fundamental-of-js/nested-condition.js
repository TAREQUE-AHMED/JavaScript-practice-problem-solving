var danishPrice = 50;
var biscutPrice = 25;
var toastPrice = 15;
var myBudget = 100;
var wellPacked = true;

// if (danishPrice < myBudget) {
//     console.log("Danish Khabo");
// }
// else if (biscutPrice < myBudget) {
//     console.log("Biscut khabo");
// }
// else if (toastPrice < myBudget) {
//     console.log("Toast khabo");
// }
// else {
//     console.log("Batas Khabo");
// }

if (danishPrice < myBudget) {
    if (wellPacked == true) {
        console.log("Danish khabo!!");
    }
   
    else {
        console.log("Khabo na");
    }
}