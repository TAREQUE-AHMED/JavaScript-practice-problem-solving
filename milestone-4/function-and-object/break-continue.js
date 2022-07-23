// var i =0;
// while (i <= 15) {
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
//     i++;
// }

// for (var i = 1; i <= 50; i++){
//     console.log(i);
//     if (i == 10) {
//         break;
//     }

// }
// var numbers = [20, 25, 30, 26, 17, 19,70,80,90,95,87];
// for (var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if (number > 50) {
//         break;
//     }
// }

var numbers = [20, 50, 70, 80, 98, 101, 105, 108, 109,40,80,90];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
     console.log(number);
}