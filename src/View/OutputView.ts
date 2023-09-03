import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages';

export interface PrintHint {
  ball: number;
  strike: number;
}

export const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printHint({ ball, strike }: PrintHint) {
    if (!ball && !strike) {
      return Console.print(OUTPUT_MESSAGE.noting);
    }
    if (ball && strike) {
      return Console.print(OUTPUT_MESSAGE.ball_and_strike(ball, strike));
    }
    if (strike) {
      return Console.print(OUTPUT_MESSAGE.strike(strike));
    }
    return Console.print(OUTPUT_MESSAGE.ball(ball));
  },

  printSuccess() {
    Console.print(OUTPUT_MESSAGE.success);
  },

  finishGame() {
    Console.close();
  },
};
