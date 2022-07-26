const names = ['babul', 'kabul', 'cabul', 'gabul', 'babul', 'cabul', 'mabul', 'tabul', 'mabul', 'tabul'];
function removeDublicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDublicate(names);
console.log(uniqueNames);