const View = require('../view/View');
const Computer = require('../model/Computer');
const {
  isValidNumbers,
  isValidLength,
  hasRepeatedNumbers,
} = require('../utils/validation');
const { convertToNumberArray } = require('../utils/convert');

class Controller {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  start = () => {
    View.printStartMessage();
    this.compare();
  };

  compare = () => {
    View.inputPlayerNumbers((input: string) => {
      this.inputValidation(input);

      const playerNumbers = convertToNumberArray(input);

      const count = this.#computer.compareNumbers(playerNumbers);
      const hintMessage = this.#computer.hintMessage(count);

      View.printMessage(hintMessage);

      this.compare();
    });
  };

  inputValidation = (input: string) => {
    isValidNumbers(input);
    isValidLength(input);
    hasRepeatedNumbers(input);
  };
}

module.exports = Controller;
