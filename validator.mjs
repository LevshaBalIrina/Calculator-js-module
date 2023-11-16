class Validator {
    isValidNumber (validateNumber) {
        if(typeof validateNumber !== 'number') {
            console.error(`${validateNumber} должно быть число!`)
            return false;
        }
        return true;
    }
    divisionByZero (b){
        if(b === 0) { console.log("ОШИБКА!!! На ноль делить нельзя!")
            return false;
        }
        return true;
    }
    }

    export default Validator;

