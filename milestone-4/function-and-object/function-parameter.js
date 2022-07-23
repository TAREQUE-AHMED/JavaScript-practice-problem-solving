function biringSingara(taka) {
    console.log('singarar jono dice', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuentity = taka / singaraPrice;
    return singaraQuentity;
}
var money = 90;
var singara = biringSingara(money);
console.log(singara);