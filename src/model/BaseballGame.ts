const { Random } = require('@woowacourse/mission-utils');
const game = require('../constants/Game');

class BaseballGame {
  #computer: number[] = [];

  constructor() {
    this.setComputer();
  }

  setComputer() {
    while (this.#computer.length < game.NUMBER_LENGTH) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(randomNum)) {
        this.#computer.push(randomNum);
      }
    }
  }
}

module.exports = BaseballGame;
