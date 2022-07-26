function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log("It is a leap year", year);
    }
    else {
        console.log("Not a leap year", year);
    }
    return year;
}
const year = leapYear(2000);
console.log(year);