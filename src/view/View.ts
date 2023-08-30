import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message';

const View = {
  printStartMessage: () => {
    return Console.print(MESSAGE.start_game);
  },

  inputPlayerNumbers: (callback: (input: string) => void) => {
    return Console.readLine(MESSAGE.input_number, callback);
  },

  printMessage: (message: string) => {
    return Console.print(message);
  },

  printRestartMessage: (callback: (input: string) => void) => {
    return Console.readLine(MESSAGE.restart_game, callback);
  },

  consoleClose: () => {
    return Console.close();
  },
};

export default View;
