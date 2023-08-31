import View from '../view/View';
import Computer from '../model/Computer';
import { GAME_CODE } from '../constants/game';
import { MESSAGE } from '../constants/message';
import { convertToNumberArray } from '../utils/convert';
import {
  hasRepeatedNumbers,
  isValidCode,
  isValidLength,
  isValidNumbers,
} from '../utils/validation';

class Controller {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  start() {
    View.printStartMessage();
    this.#compare();
  }

  #compare() {
    View.inputPlayerNumbers((input: string) => {
      this.#inputValidation(input);

      const playerNumbers = convertToNumberArray(input);
      const count = this.#computer.compareNumbers(playerNumbers);
      const hintMessage = this.#computer.hintMessage(count);

      View.printMessage(hintMessage);

      const isWin = count.strike === GAME_CODE.win;
      if (isWin) {
        View.printMessage(MESSAGE.win_game);
        this.#askRestart();
      } else {
        this.#compare();
      }
    });
  }

  #inputValidation(input: string) {
    isValidNumbers(input);
    isValidLength(input);
    hasRepeatedNumbers(input);
  }

  #askRestart() {
    View.printRestartMessage((input: string) => {
      const code = Number(input);

      isValidCode(code);

      if (code === GAME_CODE.restart) {
        this.#computer.resetNumbers();
        this.start();
      }

      if (code === GAME_CODE.finish) {
        this.#gameOver();
      }
    });
  }

  #gameOver() {
    View.printMessage(MESSAGE.game_over);
    View.consoleClose();
  }
}

export default Controller;
