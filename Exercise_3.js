// Functions
//1
function cal(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(cal(2, 3));
//2
function fixed() {
    return 14;
}
console.log(fixed());
//3 
function both(stringg, boolangg) {
    if (boolangg === void 0) { boolangg = "Its Optional"; }
    console.log("My name is ".concat(stringg, " and I am part of ").concat(boolangg));
    return stringg;
}
console.log(both('Edward'));
