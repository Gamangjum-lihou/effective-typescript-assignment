import { NUMBER_LENGTH } from '../constants/Game';
import { ERROR_MESSAGE } from '../constants/Message';

const checkValidLength = (length: number) => {
  if (length !== NUMBER_LENGTH) {
    throw ERROR_MESSAGE.number_digit;
  }
};

const checkHasNoDuplicates = (numbers: number[]) => {
  const numberSet = new Set([...numbers]);
  if (numberSet.size !== NUMBER_LENGTH) {
    throw ERROR_MESSAGE.number_digit;
  }
};

export { checkValidLength, checkHasNoDuplicates };
