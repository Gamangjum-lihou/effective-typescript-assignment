import { Console } from '@woowacourse/mission-utils';
import { OutputView, PrintHint } from './OutputView';
import { INPUT_MESSAGE } from '../constants/Messages';
import Validator from '../lib/validator';

const View = {
  printStart() {
    OutputView.printStart();
  },

  readGameNumbers(callback: any) {
    Console.readLine(INPUT_MESSAGE.game_number, userInput => {
      callback(Validator.checkGameNumbers(userInput));
    });
  },

  printHint(value: PrintHint) {
    OutputView.printHint(value);
  },

  printSuccess() {
    OutputView.printSuccess();
  },
};

export default View;
