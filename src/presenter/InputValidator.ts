import { NUMBER_LENGTH } from '../constants/Game';
import { ERROR_MESSAGE } from '../constants/Message';

const checkValidLength = (length: number) => {
  if (length !== NUMBER_LENGTH) {
    throw ERROR_MESSAGE.number_digit;
  }
};

export { checkValidLength };
