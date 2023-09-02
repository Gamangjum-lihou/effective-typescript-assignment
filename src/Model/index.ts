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

  #resetScore() {
    this.#score = { ball: 0, strike: 0 };
  }
}

export default BaseballModel;
