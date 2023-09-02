import { Console } from '@woowacourse/mission-utils'
import { INPUT_MESSAGE } from '../constants/Message'

const readUserNumber = (callback: Function) => {
  Console.readLine(INPUT_MESSAGE.ask_number, (input: string) => callback(input))
}

const readGameCommand = (callback: Function) => {
  Console.readLine(INPUT_MESSAGE.ask_retry_or_quit, (input: string) =>
    callback(input),
  )
}

export { readUserNumber, readGameCommand }
