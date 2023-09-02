import { ERROR_MESSAGE } from '../../constants/Messages';
import GENERATOR from '../../constants/System';
import ValidationError from '../error/ValidationError';

class GameNumber {
  #inputNumbers;

  constructor(input: string) {
    this.#inputNumbers = input;
    this.#checkInput();
  }

  #checkInput() {
    this.#checkNumber();
    this.#checkZero();
    this.#checkNumberOfDigits();
    this.#checkDuplication();
  }

  #checkNumber() {
    if (this.#isNotNumber()) {
      throw new ValidationError(ERROR_MESSAGE.only_number);
    }
  }

  #isNotNumber() {
    return Number.isNaN(Number(this.#inputNumbers));
  }

  #checkZero() {
    if (this.#haveZero()) {
      throw new ValidationError(ERROR_MESSAGE.not_zero);
    }
  }

  #haveZero() {
    return this.#inputNumbers.includes('0');
  }

  #checkNumberOfDigits() {
    if (this.#isNotThreeDigitNumber()) {
      throw new ValidationError(ERROR_MESSAGE.length_three);
    }
  }

  #isNotThreeDigitNumber() {
    return this.#inputNumbers.length !== GENERATOR.pick_count;
  }

  #checkDuplication() {
    if (this.#isDuplicated()) {
      throw new ValidationError(ERROR_MESSAGE.not_duplication);
    }
  }

  #isDuplicated() {
    const set = new Set([...this.#inputNumbers]);
    return this.#inputNumbers.length !== set.size;
  }
}

export default GameNumber;
