import { Random } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH } from '../constants/Game';

class BaseballGame {
  #computer: number[] = [];

  constructor() {
    this.setComputer();
  }

  setComputer() {
    while (this.#computer.length < NUMBER_LENGTH) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(randomNum)) {
        this.#computer.push(randomNum);
      }
    }
  }

  resetComputer() {
    this.#computer = [];
    this.setComputer();
  }
}

export default BaseballGame;
