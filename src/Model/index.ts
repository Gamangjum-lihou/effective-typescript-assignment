import RandomNumberGenerator from '../utils/RandomNumberGenerator';

class BaseballModel {
  #computerNumbers: number[];

  #score: { ball: number; strike: number };

  constructor() {
    this.#computerNumbers = [];
    this.#score = { ball: 0, strike: 0 };
  }

  setGame() {
    this.#saveComputerNumbers();
    this.#resetScore();
  }

  #saveComputerNumbers() {
    this.#computerNumbers = RandomNumberGenerator.generateRandomNumber();
  }

  compareUserWithComputerNumbers(input: string) {
    const userNumbers = [...input];
    userNumbers.forEach((number, index) => {
      const isNumberInComputerNumbers = this.#computerNumbers.includes(Number(number));
      const isStrike = isNumberInComputerNumbers && this.#computerNumbers.indexOf(Number(number)) === index;
      const isBall = isNumberInComputerNumbers && !isStrike;
      if (isStrike) {
        this.#score.strike += 1;
      }
      if (isBall) {
        this.#score.ball += 1;
      }
    });
    return this.#score;
  }

  isThreeStrikes() {
    const isThreeStrikes = this.#score.strike === 3;
    this.#resetScore();
    return isThreeStrikes;
  }

  #resetScore() {
    this.#score = { ball: 0, strike: 0 };
  }
}

export default BaseballModel;
