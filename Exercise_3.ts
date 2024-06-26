// Functions
//1
function cal(num1,num2){
    let sum = num1 + num2;

    return sum
}
console.log(cal(2,3));

//2
function fixed(){
    return 14;
}
console.log(fixed());

//3 

function both(stringg, boolangg = "It's Optional" ){

    console.log(`My name is ${stringg} and I am part of ${boolangg}`);

    return stringg
}
console.log(both('Edward',));