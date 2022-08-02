function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const greenButton = document.getElementById('blue-button');
greenButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}


const makeGolden = document.getElementById('make-golgrenrod');
makeGolden.addEventListener('click', goldenButton);
function goldenButton() {
    document.body.style.backgroundColor='goldenrod'
}


const makePink = document.getElementById('hot-pink');
makePink.addEventListener('click', function pinkButton() {
    document.body.style.backgroundColor = 'hotpink';
})

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})