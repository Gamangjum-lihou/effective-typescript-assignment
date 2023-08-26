import GameNumber from './GameNumber';
import GameCommand from './GameCommand';

const Validator = {
  checkGameNumbers(input: unknown) {
    new GameNumber(input);
    return input;
  },

  checkGameCommand(input: unknown) {
    GameCommand.checkGameCommand(input);
    return input;
  },
};

export default Validator;
