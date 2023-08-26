import BaseballGame from '../model/BaseballGame';
import { printStart, printError } from '../view/OutputView';
import { readAnswer } from '../view/InputView';
import { checkValidLength, checkHasNoDuplicates } from './InputValidator';

class BaseballGamePresenter {
  #baseballGame = new BaseballGame();

  constructor() {
    printStart();
  }

  run() {
    readAnswer((input: string) => {
      try {
        this.#checkInput(input);
      } catch (message) {
        printError(message as string);
        this.run();
      }
    });
  }

  #checkInput(input: string) {
    const userNumbers = input.split('').map(Number);
    checkValidLength(userNumbers.length);
    checkHasNoDuplicates(userNumbers);
  }
}

export default BaseballGamePresenter;
