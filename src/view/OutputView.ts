import {Console} from '@woowacourse/mission-utils';
import {GAME_MESSAGE, GAME_SIGN} from '../constants/View';
import {BallCounts} from '../model/Referee';

export const printStart = () => {
  Console.print(GAME_MESSAGE.start);
};

export const printScore = (score: BallCounts) => {
  if (score.strike && score.ball) {
    Console.print(
      `${score.ball}${GAME_SIGN.ball} ${score.strike}${GAME_SIGN.strike}`,
    );
  }
  if (score.strike && !score.ball) {
    Console.print(`${score.strike}${GAME_SIGN.strike}`);
  }
  if (!score.strike && score.ball) {
    Console.print(`${score.ball}${GAME_SIGN.ball}`);
  }
  if (!score.strike && !score.ball) {
    Console.print(`${GAME_SIGN.nothing}`);
  }
};

export const printEnd = () => {
  Console.print(GAME_MESSAGE.end);
};
