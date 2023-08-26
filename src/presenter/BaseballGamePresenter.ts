import BaseballGame from '../model/BaseballGame';
import {
  printStart,
  printError,
  printJudge,
  printEnd
} from '../view/OutputView';
import { readAnswer, readGameCommand } from '../view/InputView';
import { checkValidLength, checkHasNoDuplicates } from './InputValidator';
import { Console } from '@woowacourse/mission-utils';
import { COMMAND } from '../constants/Message';

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
    this.#countInput(userNumbers);
  }

  #countInput(numbers: number[]) {
    try {
      const { ball, strike } = this.#baseballGame.count(numbers);
      printJudge({ ball, strike });
      strike === 3 ? this.#finish() : this.run();
    } catch (message) {
      printError(message as string);
      this.run();
    }
  }

  #finish() {
    printEnd();
    this.#checkRetry();
  }

  #checkRetry() {
    readGameCommand((input: string) => {
      try {
        input === COMMAND.retry ? this.#retry() : this.#end();
      } catch (message) {
        printError(message as string);
        this.#checkRetry();
      }
    });
  }

  #retry() {
    this.#baseballGame.resetComputer();
    this.run();
  }

  #end() {
    Console.close();
  }
}

export default BaseballGamePresenter;
