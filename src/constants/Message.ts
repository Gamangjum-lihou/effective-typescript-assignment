import { INPUT, JUDGE, COMMAND } from './Game';

const ERROR = '[ERROR]';

export const INPUT_MESSAGE = Object.freeze({
  ask_number: '숫자를 입력해주세요 : ',
  ask_retry_or_quit: `게임을 새로 시작하려면 ${COMMAND.retry}, 종료하려면 ${COMMAND.quit}를 입력하세요.\n`
});

export const OUTPUT_MESSAGE = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  end: `${INPUT.number_length}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  ball: (count: number) => `${count}${JUDGE.ball}`,
  strike: (count: number) => `${count}${JUDGE.strike}`,
  nothing: `${JUDGE.nothing}`,
  gap: ' '
});

export const ERROR_MESSAGE = Object.freeze({
  number_digit: `${ERROR} 서로 다른 임의의 수 ${INPUT.number_length}개를 입력해야합니다.`,
  retry_or_quit: `${ERROR} '${COMMAND.retry}' 또는 '${COMMAND.quit}'를 입력해야합니다.`
});
