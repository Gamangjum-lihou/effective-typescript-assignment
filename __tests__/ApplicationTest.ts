import App from '../src/App'
import { Console, Random } from '@woowacourse/mission-utils'
import { jest, describe, test, expect } from '@jest/globals'

const mockQuestions = (answers: any[]) => {
  Console.readLine = jest.fn<typeof Console.readLine>()
  answers.reduce(
    (
      acc: {
        mockImplementationOnce: (arg0: typeof Console.readLine) => any
      },
      input: string,
    ) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input)
      })
    },
    Console.readLine,
  )
}

const mockRandoms = (numbers: any[]) => {
  Random.pickNumberInRange = jest.fn<typeof Random.pickNumberInRange>()
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number)
  }, Random.pickNumberInRange)
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print')
  logSpy.mockClear()
  return logSpy
}

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9]
    const answers = ['246', '135', '1', '597', '589', '2']
    const logSpy = getLogSpy()
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ]

    mockRandoms(randoms)
    console.log('mockRandoms(randoms)', mockRandoms(randoms))
    mockQuestions(answers)
    console.log(' mockQuestions(answers)', mockQuestions(answers))

    const app = new App()
    app.play()

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
    })
  })

  describe('올바르지 않은 값 입력', () => {
    test('입력 길이 초과', () => {
      const randoms = [1, 3, 5]
      const answers = ['1234']
      try {
        mockRandoms(randoms)
        mockQuestions(answers)
        const app = new App()
        app.play()
      } catch (e) {
        expect(e).toThrowError()
      }
    })

    test('중복된 숫자', () => {
      const randoms = [1, 3, 5]
      const answers = ['117']
      try {
        mockRandoms(randoms)
        mockQuestions(answers)
        const app = new App()
        app.play()
      } catch (e) {
        expect(e).toThrowError()
      }
    })

    test('한글 및 영소문자', () => {
      const randoms = [1, 3, 5]
      const answers = ['ㄴㅇㄱ', 'o12']
      try {
        mockRandoms(randoms)
        mockQuestions(answers)
        const app = new App()
        app.play()
      } catch (e) {
        expect(e).toThrowError()
      }
    })
  })
})
