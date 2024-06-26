class calculator {
    num1: number;
    num2: number;
    answer: number;
    constructor(n1: number, n2: number, asn: number){
        this.num1 = n1;
        this.num2 = n2;
        this.answer = asn;
    }


    

    addition(){
        if(this.num1 && this.num2 !== ""){

            let sumadd: number = this.num1 + this.num2;
        console.log(sumadd);
        }
        
    }
    subtract(){
        let sumSub: number = this.num1 - this.num2;
        console.log(sumSub);
    }
    multiply(){
        let sumMult: number = this.num1 * this.num2;
        console.log(sumMult);
    }
    divide(){
        let sumDiv: number = this.num1 / this.num2;
        console.log(sumDiv);
    }

}