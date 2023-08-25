const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #numbers;

  constructor() {
    this.#numbers = this.setNumbers();
  }

  setNumbers() {
    const computer: number[] = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
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
