// class calculator {
//     num1: number;
//     num2: number;
//     answer: number;
//     constructor(n1: number, n2: number, asn: number){
//         this.num1 = n1;
//         this.num2 = n2;
//         this.answer = asn;
//     }


//     addition(){
//         const sumadd: number = this.num1 + this.num2;
        
//         return sumadd
//     }

//     subtract(){
//         let sumSub: number = this.num1 - this.num2;
//         console.log(sumSub);
//         return sumSub
//     }
//     multiply(){
//         let sumMult: number = this.num1 * this.num2;
//         console.log(sumMult);
//         return sumMult
//     }
//     divide(){
//         let sumDiv: number = this.num1 / this.num2;
//         console.log(sumDiv);
//         return sumDiv
//     }

//     addition(1,2);

// }

const number_1 = document.getElementById("num1") as HTMLInputElement
const number_2 = document.getElementById("num2") as HTMLInputElement

const addbutton = document.getElementById("add") as HTMLButtonElement
const subbutton = document.getElementById("sub") as HTMLButtonElement
const divbutton = document.getElementById("div") as HTMLButtonElement
const mulpbutton = document.getElementById("mult") as HTMLButtonElement

const printAnswer = document.getElementById("results") as HTMLOutputElement

function addition(){
    let anum1 = parseFloat(number_1.value);
    let anum2 = parseFloat(number_2.value);
    let results = anum1 + anum2;
    printAnswer.textContent = results.toString();
}
addbutton.addEventListener("click", addition)
function sub(){
    let snum1 = parseFloat(number_1.value);
    let snum2 = parseFloat(number_2.value);
    let results = snum1 - snum2;
    printAnswer.textContent = results.toString();
}
addbutton.addEventListener("click", sub)
function div(){
    let dnum1 = parseFloat(number_1.value);
    let dnum2 = parseFloat(number_2.value);
    let results = dnum1 / dnum2;
    printAnswer.textContent = results.toString();
}
addbutton.addEventListener("click", div)
function multiply(){
    let mnum1 = parseFloat(number_1.value);
    let mnum2 = parseFloat(number_2.value);
    let results = mnum1 * mnum2;
    printAnswer.textContent = results.toString();
}
addbutton.addEventListener("click", multiply)

