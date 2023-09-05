import { INPUT, COMMAND } from '../constants/Game'
import { ERROR_MESSAGE } from '../constants/Message'

export const checkValidLength = (length: number) => {
  if (length !== INPUT.number_length) {
    throw ERROR_MESSAGE.number_digit
  }
}

export const checkHasNoDuplicates = (numbers: number[]) => {
  const numberSet = new Set([...numbers])
  if (numberSet.size !== INPUT.number_length) {
    throw ERROR_MESSAGE.number_digit
  }
}

export const checkGameCommand = (input: string) => {
  if (input !== COMMAND.retry && input !== COMMAND.quit) {
    throw ERROR_MESSAGE.retry_or_quit
  }
}
