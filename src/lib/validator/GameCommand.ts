import ValidationError from '../error/ValidationError';
import { ERROR_MESSAGE } from '../../constants/Messages';

type CheckFn = (input: string) => void;

export const checkNumber: CheckFn = input => {
  if (/\D/.test(input)) {
    throw new ValidationError(ERROR_MESSAGE.only_number);
  }
};

export const checkLength: CheckFn = input => {
  if (input.length !== 1) {
    throw new ValidationError(ERROR_MESSAGE.length_one);
  }
};

export const checkOneOrTwo: CheckFn = input => {
  if (!/1|2/.test(input)) {
    throw new ValidationError(ERROR_MESSAGE.one_or_two);
  }
};
