import { NUMBER_LENGTH } from '../constants/Game';
import { COMMAND, ERROR_MESSAGE } from '../constants/Message';

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

const checkGameCommand = (input: string) => {
  if (input !== COMMAND.retry && input !== COMMAND.quit) {
    throw ERROR_MESSAGE.retry_or_quit;
  }
};

export { checkValidLength, checkHasNoDuplicates, checkGameCommand };
