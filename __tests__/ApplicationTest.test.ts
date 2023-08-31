import App from '../src/App';
import { Console, Random } from '@woowacourse/mission-utils';
import { jest, describe, expect, test } from '@jest/globals';

const mockQuestions = (answers: string[]) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return (
      acc as jest.Mock<
        (query: string, callback: (input: string) => void) => void
      >
    ).mockImplementationOnce(
      (query: string, callback: (input: string) => void) => {
        callback(input);
      }
    );
  }, Console.readLine);
};

const mockRandoms = (numbers: number[]) => {
  Random.pickNumberInRange = jest.fn() as jest.Mock<
    typeof Random.pickNumberInRange
  >;
  numbers.reduce((acc, number) => {
    return (
      acc as jest.Mock<(startInclusive: number, endInclusive: number) => number>
    ).mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
