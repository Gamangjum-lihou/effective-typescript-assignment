import BaseballGame from '../model/BaseballGame'
import {
  printStart,
  printError,
  printJudge,
  printEnd,
} from '../view/OutputView'
import { readUserNumber, readGameCommand } from '../view/InputView'
import {
  checkValidLength,
  checkHasNoDuplicates,
  checkGameCommand,
} from './InputValidator'
import { Console } from '@woowacourse/mission-utils'
import { INPUT, COMMAND } from '../constants/Game'

class BaseballGamePresenter {
  #baseballGame = new BaseballGame()

  constructor() {
    printStart()
  }

  run() {
    readUserNumber((input: string) => {
      const userNumbers = input.split('').map(Number)

      if (!this.#validateUserInput(userNumbers)) return

      const { ball, strike } = this.#baseballGame.count(userNumbers)
      printJudge({ ball, strike })

      if (strike === INPUT.number_length) this.#finish()
      else this.run()
    })
  }

  #validateUserInput(numbers: number[]) {
    try {
      checkValidLength(numbers.length)
      checkHasNoDuplicates(numbers)
      return true
    } catch (message) {
      printError(message as string)
      return false
    }
  }

  #finish() {
    printEnd()
    this.#checkRetry()
  }

  #checkRetry() {
    readGameCommand((input: string) => {
      if (!this.#validateGameCommand(input)) return

      input === COMMAND.retry ? this.#retry() : this.#end()
    })
  }

  #validateGameCommand(input: string) {
    try {
      checkGameCommand(input)
      return true
    } catch (message) {
      printError(message as string)
      return false
    }
  }

  #retry() {
    this.#baseballGame.resetComputer()
    this.run()
  }

  #end() {
    Console.close()
  }
}

export default BaseballGamePresenter
