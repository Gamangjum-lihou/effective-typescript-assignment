import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView';
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
};

export default View;
