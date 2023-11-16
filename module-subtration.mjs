import Operation from "./operation.mjs";

class Subtraction extends Operation {
    sub(a,b) { if(this.validator.isValidNumber(a) && this.validator.isValidNumber(b)) {
        console.log ("Результат вычитания: ")
     return a - b;
    }
     return  console.error("Введите число!");
    }
}

export default Subtraction;