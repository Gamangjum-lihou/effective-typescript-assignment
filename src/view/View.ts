const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/message');

const View = {
  printStartMessage: () => {
    return Console.print(MESSAGE.START_GAME);
  },

  inputPlayerNumbers: (callback: Function) => {
    return Console.readLine(MESSAGE.INPUT_NUMBER, callback);
  },

  printMessage: (message: string) => {
    return Console.print(message);
  },

  printRestartMessage: (callback: Function) => {
    return Console.readLine(MESSAGE.RESTART_GAME, callback);
  },

  consoleClose: () => {
    return Console.close();
  },
};

module.exports = View;
