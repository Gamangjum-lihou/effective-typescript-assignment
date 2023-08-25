const { ERROR_MESSAGE } = require('../constants/message');
const { VALIDATION } = require('../constants/validation');
const { GAME_CODE } = require('../constants/game');

const isValidNumbers = (input: string) => {
  if (!VALIDATION.REG_EXP.test(input)) {
    throw new Error(ERROR_MESSAGE.VALID_NUMBERS);
  }

  if (input.includes(VALIDATION.INVALID_NUMBER)) {
    throw new Error(ERROR_MESSAGE.NO_ZERO);
  }
};

const isValidLength = (input: string) => {
  if (input.length !== VALIDATION.LENGTH) {
    throw new Error(ERROR_MESSAGE.VALID_LENGTH);
  }
};

const hasRepeatedNumbers = (input: string) => {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.NO_REPEAT);
  }
};

const isValidCode = (code: number) => {
  if (code !== GAME_CODE.RESTART && code !== GAME_CODE.FINISH) {
    throw new Error(ERROR_MESSAGE.INVALID_CODE);
  }
};

module.exports = {
  isValidNumbers,
  isValidLength,
  hasRepeatedNumbers,
  isValidCode,
};
