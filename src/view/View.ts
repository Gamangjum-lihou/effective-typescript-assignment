const { Console } = require('@woowacourse/mission-utils');
const constants = require('../constants/Message');

interface Count {
  ball: number;
  strike: number;
}

const OutputView = {
  printStart() {
    Console.print(constants.OUTPUT_MESSAGE.start);
  },
  printError(message: string) {
    Console.print(message);
  },
  printJudge({ ball, strike }: Count) {
    if (ball == 0 && strike == 0) {
      Console.print(constants.OUTPUT_MESSAGE.nothing);
      return;
    }
    if (ball == 0) {
      Console.print(constants.OUTPUT_MESSAGE.strike(strike));
      return;
    }
    if (strike == 0) {
      Console.print(constants.OUTPUT_MESSAGE.ball(ball));
      return;
    }
    Console.print(
      constants.OUTPUT_MESSAGE.ball(ball) +
        constants.OUTPUT_MESSAGE.gap +
        constants.OUTPUT_MESSAGE.strike(strike)
    );
  },
  printEnd() {
    Console.print(constants.OUTPUT_MESSAGE.end);
  }
};

const InputView = {
  readAnswer(callback: Function) {
    Console.readLine(constants.INPUT_MESSAGE.answer, (input: string) =>
      callback(input)
    );
  },
  readGameCommand(callback: Function) {
    Console.readLine(
      constants.INPUT_MESSAGE.ask_retry_or_quit,
      (input: string) => callback(input)
    );
  }
};

module.exports = { ...OutputView, ...InputView };
