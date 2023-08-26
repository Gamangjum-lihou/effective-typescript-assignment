import { GAME_CODE } from '../constants/game';
import { ERROR_MESSAGE } from '../constants/message';
import { VALIDATION } from '../constants/validation';

export const isValidNumbers = (input: string) => {
  if (!VALIDATION.REG_EXP.test(input)) {
    throw new Error(ERROR_MESSAGE.VALID_NUMBERS);
  }

  if (input.includes(String(VALIDATION.INVALID_NUMBER))) {
    throw new Error(ERROR_MESSAGE.NO_ZERO);
  }
};

export const isValidLength = (input: string) => {
  if (input.length !== VALIDATION.LENGTH) {
    throw new Error(ERROR_MESSAGE.VALID_LENGTH);
  }
};

export const hasRepeatedNumbers = (input: string) => {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.NO_REPEAT);
  }
};

export const isValidCode = (code: number) => {
  if (code !== GAME_CODE.RESTART && code !== GAME_CODE.FINISH) {
    throw new Error(ERROR_MESSAGE.INVALID_CODE);
  }
};
