const View = require('../view/View');
const Computer = require('../model/Computer');
const {
  isValidNumbers,
  isValidLength,
  hasRepeatedNumbers,
} = require('../utils/validation');

class Controller {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  start = () => {
    View.printStartMessage();
    View.inputPlayerNumbers((input: string) => {
      this.inputValidation(input);
    });
  };

  inputValidation = (input: string) => {
    isValidNumbers(input);
    isValidLength(input);
    hasRepeatedNumbers(input);
  };
}

module.exports = Controller;
