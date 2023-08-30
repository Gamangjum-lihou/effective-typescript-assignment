import { GAME_CODE } from './game';
import { VALIDATION } from './validation';

export const MESSAGE = {
  start_game: '숫자 야구 게임을 시작합니다.',
  input_number: '숫자를 입력해주세요 : ',
  win_game: `${VALIDATION.length}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  restart_game: `게임을 새로 시작하려면 ${GAME_CODE.restart}, 종료하려면 ${GAME_CODE.finish}를 입력하세요.\n`,
  game_over: '게임 종료',
} as const;

export const ERROR_MESSAGE = {
  valid_numbers: '숫자만 입력해주세요.',
  valid_length: `${VALIDATION.length}자리의 숫자를 입력해주세요.`,
  no_repeat: `서로 다른 ${VALIDATION.length}자리의 수를 입력해주세요.`,
  no_zero: `${VALIDATION.min_number}부터 ${VALIDATION.max_number}사이의 숫자를 입력해주세요.`,
  invalid_code: '잘못된 코드를 입력하였습니다.',
} as const;
