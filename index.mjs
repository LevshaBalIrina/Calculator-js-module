import Addition from './module-addition.mjs';
import Subtraction from './module-subtration.mjs';
import Multiplication from './module-multiplication.mjs';
import Division from './module-division.mjs';

class Calculator {
  addition;

  subtraction;

  multiplication;

  division;

  constructor() {
    this.addition = new Addition();
    this.subtraction = new Subtraction();
    this.multiplication = new Multiplication();
    this.division = new Division();
  }

  add(a, b) {
    return this.addition.add(a, b);
}
  sub(a, b) {
    return this.subtraction.sub(a, b)
}

    mult (a,b) {
        return this.multiplication.mult(a,b);
    }

    div (a,b) {
        return this.division.div(a,b);
    }
}


const myResult = new Calculator();

console.log(myResult.add(1, 3));
console.log(myResult.sub(2, 1));
console.log(myResult.mult(2, 2));
console.log(myResult.div(4, 2));
