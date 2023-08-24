export interface BallCounts {
  ball: number;
  strike: number;
}

export class Referee {
  check = (player: number[], computer: number[]) => {
    let ball = 0;
    let strike = 0;

    computer.forEach((number, idx) => {
      if (number === player[idx]) {
        strike += 1;
      } else if (player.includes(number)) {
        ball += 1;
      }
    });

    return { ball, strike };
  }
}