const { Random } = require('@woowacourse/mission-utils');
const game = require('../constants/Game');

class BaseballGame {
  #numbers: number[] = [];

  constructor() {
    while (this.#numbers.length < game.NUMBER_LENGTH) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (!this.#numbers.includes(randomNum)) {
        this.#numbers.push(randomNum);
      }
    }
  }
}

module.exports = BaseballGame;
