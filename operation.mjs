import Validator from "./validator.mjs";

class Operation {
    validator;
    constructor () {
        this.validator = new Validator();
    }  
}

export default Operation;