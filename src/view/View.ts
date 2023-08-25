const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/message');

const View = {
  printStartMessage: () => {
    return Console.print(MESSAGE.START_GAME);
  },

  inputPlayerNumbers: (callback: Function) => {
    return Console.readLine(MESSAGE.INPUT_NUMBER, callback);
  },
};

module.exports = View;
