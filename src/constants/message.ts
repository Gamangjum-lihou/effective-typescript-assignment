import { GAME_CODE } from './game';
import { VALIDATION } from './validation';

export const MESSAGE = {
  START_GAME: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  WIN_GAME: `${VALIDATION.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_GAME: `게임을 새로 시작하려면 ${GAME_CODE.RESTART}, 종료하려면 ${GAME_CODE.FINISH}를 입력하세요.\n`,
  GAME_OVER: '게임 종료',
} as const;

export const ERROR_MESSAGE = {
  VALID_NUMBERS: '숫자만 입력해주세요.',
  VALID_LENGTH: `${VALIDATION.LENGTH}자리의 숫자를 입력해주세요.`,
  NO_REPEAT: `서로 다른 ${VALIDATION.LENGTH}자리의 수를 입력해주세요.`,
  NO_ZERO: `${VALIDATION.MIN_NUMBER}부터 ${VALIDATION.MAX_NUMBER}사이의 숫자를 입력해주세요.`,
  INVALID_CODE: '잘못된 코드를 입력하였습니다.',
} as const;
