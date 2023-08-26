import BaseballGame from '../model/BaseballGame';
import { printStart, printError } from '../view/OutputView';
import { readAnswer } from '../view/InputView';

class BaseballGamePresenter {
  #baseballGame = new BaseballGame();

  constructor() {
    printStart();
  }

  run() {
    readAnswer((input: string) => {
      try {
      } catch (message) {
        printError(message as string);
        this.run();
      }
    });
  }
}

export default BaseballGamePresenter;
