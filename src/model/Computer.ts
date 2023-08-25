const { Random } = require('@woowacourse/mission-utils');
const { VALIDATION } = require('../constants/validation');

class Computer {
  #numbers;

  constructor() {
    this.#numbers = this.setNumbers();
  }

  setNumbers() {
    const computer: number[] = [];

    while (computer.length < VALIDATION.LENGTH) {
      const number = Random.pickNumberInRange(
        VALIDATION.MIN_NUMBER,
        VALIDATION.MAX_NUMBER
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Computer;
