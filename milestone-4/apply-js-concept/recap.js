function inMon(time) {
    if (time >= 19 && time >= 5) {
        return true;
    }
    return false;
}
var statement = inMon(22);
console.log(statement);