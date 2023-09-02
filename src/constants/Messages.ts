export const INPUT_MESSAGE = Object.freeze({
  new_line: '\n',
  game_number: '숫자를 입력해주세요 : ',
  game_command: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 \n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  success: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  end: '잘못된 값을 입력하여 게임이 종료됩니다.',
  error: (name: string, message: string, cause: string) => `${name} : ${message}\n[CAUSE] : ${cause}`,
  noting: '낫싱',
  ball_and_strike: (ball: number, strike: number) => `${ball}볼 ${strike}스트라이크`,
  strike: (strike: number) => `${strike}스트라이크`,
  ball: (ball: number) => `${ball}볼`,
});
