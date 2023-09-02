import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages';

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
};

export default OutputView;
