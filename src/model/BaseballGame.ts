import { Random } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH, START, END } from '../constants/Game';
import { Count } from '../type/Game';

class BaseballGame {
  #computer: number[] = [];

  constructor() {
    this.setComputer();
  }

  setComputer() {
    while (this.#computer.length < NUMBER_LENGTH) {
      const randomNum = Random.pickNumberInRange(START, END);
      if (!this.#computer.includes(randomNum)) this.#computer.push(randomNum);
    }
  }

  resetComputer() {
    this.#computer = [];
    this.setComputer();
  }

  count(numbers: number[]): Count {
    let ball = 0,
      strike = 0;

    for (let i = 0; i < this.#computer.length; i++) {
      if (this.#computer[i] === numbers[i]) strike += 1;
      else if (numbers.includes(this.#computer[i])) ball += 1;
    }

    return { ball, strike };
  }
}

export default BaseballGame;
