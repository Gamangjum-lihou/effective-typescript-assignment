const { VALIDATION } = require('../constants/validation');

const MESSAGE = {
  START_GAME: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  FINISH_GAME: `${VALIDATION.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_GAME: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
} as const;

const ERROR_MESSAGE = {
  VALID_NUMBERS: '숫자만 입력해주세요.',
  VALID_LENGTH: `${VALIDATION.LENGTH}자리의 숫자를 입력해주세요.`,
  NO_REPEAT: `서로 다른 ${VALIDATION.LENGTH}자리의 수를 입력해주세요.`,
  NO_ZERO: `${VALIDATION.MIN_NUMBER}부터 ${VALIDATION.MAX_NUMBER}사이의 숫자를 입력해주세요.`,
} as const;

module.exports = { MESSAGE, ERROR_MESSAGE };
