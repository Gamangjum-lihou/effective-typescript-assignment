const View = require('../view/View');
const Computer = require('../model/Computer');
const {
  isValidNumbers,
  isValidLength,
  hasRepeatedNumbers,
  isValidCode,
} = require('../utils/validation');
const { convertToNumberArray } = require('../utils/convert');
const { GAME_CODE } = require('../constants/game');
const { MESSAGE } = require('../constants/message');

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

      const isWin = count.strike === GAME_CODE.WIN;
      if (isWin) {
        View.printMessage(MESSAGE.WIN_GAME);
        this.askRestart();
      } else {
        this.compare();
      }
    });
  };

  inputValidation = (input: string) => {
    isValidNumbers(input);
    isValidLength(input);
    hasRepeatedNumbers(input);
  };

  askRestart = () => {
    View.printRestartMessage((input: string) => {
      const code = Number(input);

      isValidCode(code);

      if (code === GAME_CODE.RESTART) {
        this.start();
      }

      if (code === GAME_CODE.FINISH) {
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    View.printMessage(MESSAGE.GAME_OVER);
    View.consoleClose();
  };
}

module.exports = Controller;
