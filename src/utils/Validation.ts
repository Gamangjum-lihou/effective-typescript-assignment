import {GENERATE_NUMBER} from '../constants/Computer';
import {ERROR_MESSAGE} from '../constants/View';
import {COMMAND} from '../constants/Controller';

export default class Validation {
  checkPlayerCommand = (input: string) => {
    this.isDuplication(input);
    this.isValidLength(input);
    this.isNumber(input);
  };

  checkRetryCommand = (input: string) => {
    this.isValidCommand(input);
  };

  isDuplication = (input: string) => {
    const inputSet = new Set(input);
    if (inputSet.size !== input.length) {
      throw new Error(ERROR_MESSAGE.invalidNumber);
    }
  };

  isNumber = (input: string) => {
    if (!/^\d+$/.test(input)) {
      throw new Error(ERROR_MESSAGE.invalidNumber);
    }
  };

  isValidLength = (input: string) => {
    if (input.length !== GENERATE_NUMBER.length) {
      throw new Error(ERROR_MESSAGE.invalidNumber);
    }
  };

  isValidCommand = (input: string) => {
    if (input !== COMMAND.exit && input !== COMMAND.retry) {
      throw new Error(ERROR_MESSAGE.invalidCommand);
    }
  };
}
