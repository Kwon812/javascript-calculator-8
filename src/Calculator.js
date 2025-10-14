import {errorHandler} from "./errorHandler.js";

export default class Calculator {

    #numbers
    constructor(str) {

        this.validator(str)
        this.#numbers=str.map(Number)
    }

    validator(str) {
        errorHandler.parsedNumberError(str)

    }


    getAdd(){

        return this.#numbers.reduce((a,b)=>a+b,0)
    }

}