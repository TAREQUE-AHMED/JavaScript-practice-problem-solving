var computer = {
    price: 68000,
    color: 'black',
    storage: '512gb',
    processor: 'core i5',
    brand:'as rock'
}
var computerColor = 'color';
computer[computerColor] = 'silver';
computer['price'] = 70000;
computer.storage = '1tb';
computer.brand = 'team';
console.log(computer);