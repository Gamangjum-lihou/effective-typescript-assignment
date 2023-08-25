const GAME_CODE = {
  RESTART: 1,
  FINISH: 2,
} as const;

const GAME_SIGN = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  BLANK: ' ',
} as const;

module.exports = { GAME_SIGN, GAME_CODE };
