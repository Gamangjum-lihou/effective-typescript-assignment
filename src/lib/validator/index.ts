import { checkNumber, checkLength, checkOneOrTwo } from './GameCommand';
import GameNumber from './GameNumber';

interface GameValidator<T> {
  checkGameNumbers(input: T): T;
  checkGameCommand(input: T): T;
}

const Validator: GameValidator<string> = {
  checkGameNumbers(input) {
    new GameNumber(input);
    return input;
  },

  checkGameCommand(input) {
    checkNumber(input);
    checkLength(input);
    checkOneOrTwo(input);
    return input;
  },
};

export default Validator;
