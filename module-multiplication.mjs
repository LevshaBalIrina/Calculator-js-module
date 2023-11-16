import Operation from "./operation.mjs";

class Multiplication extends Operation {
    mult(a,b) { if(this.validator.isValidNumber(a) && this.validator.isValidNumber(b)) {
        console.log ("Результат умножения: ")
     return a * b;
    }
     return  console.error("Введите число!");
    }
}

export default Multiplication;