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
};

module.exports = View;
