const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/Message');

const View = {
  printStartMessage: () => {
    return Console.print(MESSAGE.START_GAME);
  },
};

module.exports = View;
