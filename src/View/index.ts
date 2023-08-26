import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView';
import { INPUT_MESSAGE } from '../constants/Messages';
import Validator from '../lib/validator';

interface ErrorExtends extends Error {
  cause: string;
}

interface PrintHint {
  ball: number;
  strike: number;
}

const View = {
  printStart() {
    OutputView.printStart();
  },

  readGameNumbers(callback: any) {
    Console.readLine(INPUT_MESSAGE.game_number, userInput => {
      callback(Validator.checkGameNumbers(userInput));
    });
  },

  readGameCommand(callback: any) {
    Console.readLine(INPUT_MESSAGE.game_command, userInput => {
      callback(Validator.checkGameCommand(userInput));
    });
  },

  printHint(value: PrintHint) {
    OutputView.printHint(value);
  },

  printSuccess() {
    OutputView.printSuccess();
  },

  printError(error: ErrorExtends) {
    OutputView.printError(error);
    OutputView.printGameEnd();
  },

  finishGame() {
    OutputView.finishGame();
  },
};

export default View;
