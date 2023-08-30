import { GAME_CODE } from '../constants/game';
import { ERROR_MESSAGE } from '../constants/message';
import { VALIDATION } from '../constants/validation';

type Validation<T extends string | number> = (input: T) => void;

export const isValidNumbers: Validation<string> = (input) => {
  if (!VALIDATION.REG_EXP.test(input)) {
    throw new Error(ERROR_MESSAGE.VALID_NUMBERS);
  }

  if (input.includes(String(VALIDATION.INVALID_NUMBER))) {
    throw new Error(ERROR_MESSAGE.NO_ZERO);
  }
};

export const isValidLength: Validation<string> = (input) => {
  if (input.length !== VALIDATION.LENGTH) {
    throw new Error(ERROR_MESSAGE.VALID_LENGTH);
  }
};

export const hasRepeatedNumbers: Validation<string> = (input) => {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.NO_REPEAT);
  }
};

export const isValidCode: Validation<number> = (code) => {
  if (code !== GAME_CODE.RESTART && code !== GAME_CODE.FINISH) {
    throw new Error(ERROR_MESSAGE.INVALID_CODE);
  }
};
