import { Console } from '@woowacourse/mission-utils'
import { OUTPUT_MESSAGE } from '../constants/Message'
import { Count } from '../type/Game'

const printStart = () => {
  Console.print(OUTPUT_MESSAGE.start)
}

const printError = (message: string) => {
  Console.print(message)
}

const printJudge = ({ ball, strike }: Count) => {
  if (ball == 0 && strike == 0) {
    Console.print(OUTPUT_MESSAGE.nothing)
    return
  }
  if (ball == 0) {
    Console.print(OUTPUT_MESSAGE.strike(strike))
    return
  }
  if (strike == 0) {
    Console.print(OUTPUT_MESSAGE.ball(ball))
    return
  }
  Console.print(
    OUTPUT_MESSAGE.ball(ball) +
      OUTPUT_MESSAGE.gap +
      OUTPUT_MESSAGE.strike(strike),
  )
}

const printEnd = () => {
  Console.print(OUTPUT_MESSAGE.end)
}

export { printStart, printError, printJudge, printEnd }
