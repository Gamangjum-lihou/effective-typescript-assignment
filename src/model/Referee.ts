import {GENERATE_NUMBER} from '../constants/Computer';

export interface BallCounts {
  ball: number;
  strike: number;
  clear: boolean;
}

export class Referee {
  check = (player: number[], computer: number[]) => {
    let ball = 0;
    let strike = 0;
    let clear = false;

    computer.forEach((number, idx) => {
      if (number === player[idx]) {
        strike += 1;
      } else if (player.includes(number)) {
        ball += 1;
      }
    });

    return {ball, strike, clear: strike === GENERATE_NUMBER.length};
  };
}
