// const products = [
//     { name: 'laptop', price: 45000 },
//     { name: 'shirt', price: 500 },
//     { name: 'watch', price: 3500 },
//     { name: 'phone', price: 15000 }
// ];
// let totalPrice = 0;
// for (const product of products) {
//      totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);
const cart = [
    { name: 'laptop', price: 45000,Quantity:1},
    { name: 'shirt', price: 500,Quantity:5 },
    { name: 'watch', price: 3500,Quantity:3 },
    { name: 'phone', price: 15000,Quantity:2 }
];
function productCost(cart) {
    let totalPrice = 0;
    for (const product of cart) {
        const productTotal = product.price * product.Quantity;
        totalPrice = totalPrice + productTotal;
    }
    return totalPrice;
}
const totalCost = productCost(cart);
console.log(totalCost);