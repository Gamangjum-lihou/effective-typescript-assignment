import {Console} from '@woowacourse/mission-utils';
import {GAME_MESSAGE} from '../constants/View';
import {BallCounts} from '../model/Referee';

export const printStart = () => {
  Console.print(GAME_MESSAGE.start);
};

export const printScore = (score: BallCounts) => {
  if (score.strike && score.ball) {
    Console.print(`${score.strike}스트라이크 ${score.ball}볼`);
  }
  if (score.strike && !score.ball) {
    Console.print(`${score.strike}스트라이크`);
  }
  if (!score.strike && score.ball) {
    Console.print(`${score.ball}볼`);
  }
  if (!score.strike && !score.ball) {
    Console.print(`낫싱`);
  }
};

export const printEnd = () => {
  Console.print(GAME_MESSAGE.end);
};
