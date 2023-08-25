const View = require('../view/View');
const Computer = require('../model/Computer');

class Controller {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  start = () => {
    View.printStartMessage();
  };
}

module.exports = Controller;
