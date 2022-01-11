"use strict";

class Calculator {
    constructor(currentOperandTextElement, previousOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break
            case "-":
                computation = prev - current;
                break
            case "*":
                computation = prev * current;
                break
            case "/":
                computation = prev / current;
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0});
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");

const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})
clearButton.addEventListener("dblclick", () => {
    calculator.clear();
    calculator.updateDisplay();
})



//////////////////// dark mode //////////////////


let darkButton = document.querySelector("[data-dark-mode]");
let calcBody = document.querySelector(".calc-body");
let outPut = document.querySelector(".output");
let divideB = document.querySelector(".divide-button");
let multiplyB = document.querySelector(".multiply-button");
let minusB = document.querySelector(".minus-button");
let plusB = document.querySelector(".plus-button");
let numberOne = document.querySelector(".one-a");
let numberTwo = document.querySelector(".two-a");
let numberTree = document.querySelector(".tree-a");
let numberFour = document.querySelector(".four-a");
let numberFive = document.querySelector(".five-a");
let numberSix = document.querySelector(".six-a");
let numberSeven = document.querySelector(".seven-a");
let numberEight = document.querySelector(".eight-a");
let numberNine = document.querySelector(".nine-a");
let numberZero = document.querySelector(".zero-button");
let dotS = document.querySelector(".dot-button");


darkButton.addEventListener("click", function () {
    if (calcBody.classList.contains("background-dark")) {
        calcBody.classList.remove("background-dark");
        outPut.classList.remove("background-dark");
        darkButton.classList.remove("button-neo");
        equalButton.classList.remove("button-neo");
        clearButton.classList.remove("button-neo");
        divideB.classList.remove("button-neo");
        multiplyB.classList.remove("button-neo");
        minusB.classList.remove("button-neo");
        plusB.classList.remove("button-neo");
        currentOperandTextElement.classList.remove("output-text-color")
        numberZero.classList.remove("button-neo")
        numberOne.classList.remove("button-neo")
        numberTwo.classList.remove("button-neo")
        numberTree.classList.remove("button-neo")
        numberFour.classList.remove("button-neo")
        numberFive.classList.remove("button-neo")
        numberSix.classList.remove("button-neo")
        numberSeven.classList.remove("button-neo")
        numberEight.classList.remove("button-neo")
        numberNine.classList.remove("button-neo")
        dotS.classList.remove("button-neo")
    } else {
        calcBody.classList.add("background-dark");
        outPut.classList.add("background-dark");
        darkButton.classList.add("button-neo");
        equalButton.classList.add("button-neo");
        clearButton.classList.add("button-neo");
        divideB.classList.add("button-neo");
        multiplyB.classList.add("button-neo");
        minusB.classList.add("button-neo");
        plusB.classList.add("button-neo");
        currentOperandTextElement.classList.add("output-text-color")
        previousOperandTextElement.classList.add("output-text-color")
        numberZero.classList.add("button-neo")
        numberOne.classList.add("button-neo")
        numberTwo.classList.add("button-neo")
        numberTree.classList.add("button-neo")
        numberFour.classList.add("button-neo")
        numberFive.classList.add("button-neo")
        numberSix.classList.add("button-neo")
        numberSeven.classList.add("button-neo")
        numberEight.classList.add("button-neo")
        numberNine.classList.add("button-neo")
        dotS.classList.add("button-neo")
    }

})







