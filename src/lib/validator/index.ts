import GameNumber from './GameNumber';

const Validator = {
  checkGameNumbers(input: string) {
    new GameNumber(input);
    return input;
  },
};

export default Validator;
