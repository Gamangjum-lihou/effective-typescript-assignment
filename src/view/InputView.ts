import { Console } from '@woowacourse/mission-utils'
import { INPUT_MESSAGE } from '../constants/Message'

export const readUserNumber = (callback: Function) => {
  Console.readLine(INPUT_MESSAGE.ask_number, (input: string) => callback(input))
}

export const readGameCommand = (callback: Function) => {
  Console.readLine(INPUT_MESSAGE.ask_retry_or_quit, (input: string) =>
    callback(input),
  )
}
