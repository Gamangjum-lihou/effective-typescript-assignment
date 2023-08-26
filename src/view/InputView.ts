import {Console} from '@woowacourse/mission-utils';
import {GAME_MESSAGE} from '../constants/View';
import Validation from '../utils/Validation';

type readFunctionProp = (input: string) => void;
const validation = new Validation();

export const readPlayerCommand = (callback: readFunctionProp) => {
  Console.readLine(GAME_MESSAGE.inGame, (input: string) => {
    validation.checkPlayerCommand(input);
    callback(input);
  });
};

export const readRetryCommand = (callback: readFunctionProp) => {
  Console.readLine(GAME_MESSAGE.option, (input: string) => {
    validation.checkRetryCommand(input);
    callback(input);
  });
};

export const close = () => {
  return Console.close();
};
