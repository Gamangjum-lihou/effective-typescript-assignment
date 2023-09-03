import { Console } from '@woowacourse/mission-utils';
import { OutputView, PrintHint } from './OutputView';
import { INPUT_MESSAGE } from '../constants/Messages';
import Validator from '../lib/validator';

const View = {
  printStart() {
    OutputView.printStart();
  },

  readGameNumbers<T extends (arg: string) => unknown>(callback: T) {
    Console.readLine(INPUT_MESSAGE.game_number, userInput => {
      callback(Validator.checkGameNumbers(userInput));
    });
  },

  readGameCommand<T extends (arg: string) => unknown>(callback: T) {
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

  finishGame() {
    OutputView.finishGame();
  },
};

export default View;
