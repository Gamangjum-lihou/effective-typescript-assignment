import BaseballGame from '../model/BaseballGame';
import {
  printStart,
  printError,
  printJudge,
  printEnd
} from '../view/OutputView';
import { readAnswer, readGameCommand } from '../view/InputView';
import {
  checkValidLength,
  checkHasNoDuplicates,
  checkGameCommand
} from './InputValidator';
import { Console } from '@woowacourse/mission-utils';
import { COMMAND } from '../constants/Message';

class BaseballGamePresenter {
  #baseballGame = new BaseballGame();

  constructor() {
    printStart();
  }

  run() {
    readAnswer(this.#handleAnswerInput.bind(this));
  }

  #handleAnswerInput(input: string) {
    try {
      const userNumbers = input.split('').map(Number);
      this.#checkInput(userNumbers);
    } catch (message) {
      printError(message as string);
      this.run();
    }
  }

  #checkInput(numbers: number[]) {
    checkValidLength(numbers.length);
    checkHasNoDuplicates(numbers);
    this.#countInput(numbers);
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
    readGameCommand(this.#handleGameCommandInput.bind(this));
  }

  #handleGameCommandInput(input: string) {
    try {
      checkGameCommand(input);
      input === COMMAND.retry ? this.#retry() : this.#end();
    } catch (message) {
      printError(message as string);
      this.#checkRetry();
    }
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
