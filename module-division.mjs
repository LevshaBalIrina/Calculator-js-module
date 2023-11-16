import Operation from "./operation.mjs";

class Division extends Operation { 
    div(a,b) { 
       if(this.validator.isValidNumber(a) && this.validator.isValidNumber(b) && this.validator.divisionByZero(b)) {
       console.log ("Результат деления: ")
    return a / b;
    }
    }
}

export default Division;