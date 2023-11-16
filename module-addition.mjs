import Operation from "./operation.mjs";

class Addition extends Operation {
    add(a,b) { 
     if(this.validator.isValidNumber(a) && this.validator.isValidNumber(b)) {
        console.log ("Результат суммирования: ")
     return a + b;
    }
     return  console.error("Введите число!");
    }
}

export default Addition;