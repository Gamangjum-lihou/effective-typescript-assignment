import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message';

const View = {
  printStartMessage: () => {
    return Console.print(MESSAGE.START_GAME);
  },

  inputPlayerNumbers: (callback: (input: string) => void) => {
    return Console.readLine(MESSAGE.INPUT_NUMBER, callback);
  },

  printMessage: (message: string) => {
    return Console.print(message);
  },

  printRestartMessage: (callback: (input: string) => void) => {
    return Console.readLine(MESSAGE.RESTART_GAME, callback);
  },

  consoleClose: () => {
    return Console.close();
  },
};

export default View;
