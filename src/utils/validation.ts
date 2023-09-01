import { GAME_CODE } from '../constants/game';
import { ERROR_MESSAGE } from '../constants/message';
import { VALIDATION } from '../constants/validation';

type Validation<T extends string | number> = (input: T) => void;

export const isValidNumbers: Validation<string> = (input) => {
  if (!VALIDATION.reg_exp.test(input)) {
    throw new Error(ERROR_MESSAGE.valid_numbers);
  }

  if (input.includes(String(VALIDATION.invalid_number))) {
    throw new Error(ERROR_MESSAGE.no_zero);
  }
};

export const isValidLength: Validation<string> = (input) => {
  if (input.length !== VALIDATION.length) {
    throw new Error(ERROR_MESSAGE.valid_length);
  }
};

export const hasRepeatedNumbers: Validation<string> = (input) => {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.no_repeat);
  }
};

export const isValidCode: Validation<number> = (code) => {
  if (code !== GAME_CODE.restart && code !== GAME_CODE.finish) {
    throw new Error(ERROR_MESSAGE.invalid_code);
  }
};
