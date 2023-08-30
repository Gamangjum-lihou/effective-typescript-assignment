import { Random } from '@woowacourse/mission-utils';
import { GAME_SIGN } from '../constants/game';
import { VALIDATION } from '../constants/validation';

interface Count {
  strike: number;
  ball: number;
}

class Computer {
  #numbers;

  constructor() {
    this.#numbers = this.setNumbers();
  }

  setNumbers = () => {
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
  };

  compareNumbers = (playerNumbers: number[]): Count => {
    const count = { strike: 0, ball: 0 };

    playerNumbers.forEach((number, index) => {
      const isStrike = number === this.#numbers[index];
      const isBall = this.#numbers.includes(number) && !isStrike;

      if (isStrike) {
        count.strike += 1;
      }

      if (isBall) {
        count.ball += 1;
      }
    });

    return count;
  };

  hintMessage = (count: Count) => {
    const { strike, ball } = count;
    let message = '';

    if (strike === 0 && ball === 0) {
      message = GAME_SIGN.NOTHING;
    }

    if (ball > 0) {
      message += `${ball}${GAME_SIGN.BALL}`;
    }

    if (strike > 0) {
      if (ball !== 0) {
        message += GAME_SIGN.BLANK;
      }
      message += `${strike}${GAME_SIGN.STRIKE}`;
    }

    return message;
  };
}

export default Computer;
