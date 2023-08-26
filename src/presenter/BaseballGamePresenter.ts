const { printStart, readAnswer, printError } = require('../view/View');
const baseballGame = require('../model/BaseballGame');

class BaseballGamePresenter {
  #baseballGame = new baseballGame();

  constructor() {
    printStart();
  }

  run() {
    readAnswer((input: string) => {
      try {
      } catch (message) {
        printError(message);
        this.run();
      }
    });
  }
}

module.exports = BaseballGamePresenter;
