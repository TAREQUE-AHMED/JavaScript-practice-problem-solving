const phones = [
    { name: 'samsung s2', price: 50000, camera: 10, storage: 64 },
    { name: 'iphone', price: 7500, camera: 12, storage: 128 },
    { name: 'symphony', price: 15000, camera: 8, storage: 32 },
    { name: 'oppo', price: 25000, camera: 8, storage: 64 },
    { name: 'walton', price: 20000, camera: 8, storage: 16 },
    { name: 'tecno', price: 35000, camera: 8, storage: 16 },
    { name: 'nokia', price: 450000, camera: 2, storage: 8 },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const result = cheapestPhone(phones);
console.log(result);