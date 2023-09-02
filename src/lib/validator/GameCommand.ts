import ValidationError from '../error/ValidationError';
import { ERROR_MESSAGE } from '../../constants/Messages';

const GameCommand = {
  checkGameCommand(input: string) {
    this.checkNumber(input);
    this.checkLength(input);
    this.checkOneOrTwo(input);
  },

  checkNumber(input: string) {
    if (/\D/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.only_number);
    }
  },

  checkLength(input: string) {
    if (input.length !== 1) {
      throw new ValidationError(ERROR_MESSAGE.length_one);
    }
  },

  checkOneOrTwo(input: string) {
    if (!/1|2/.test(input)) {
      throw new ValidationError(ERROR_MESSAGE.one_or_two);
    }
  },
};

export default GameCommand;
