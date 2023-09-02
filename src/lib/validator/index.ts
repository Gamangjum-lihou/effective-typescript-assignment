import GameCommand from './GameCommand';
import GameNumber from './GameNumber';

const Validator = {
  checkGameNumbers(input: string) {
    new GameNumber(input);
    return input;
  },

  checkGameCommand(input: string) {
    GameCommand.checkGameCommand(input);
    return input;
  },
};

export default Validator;
