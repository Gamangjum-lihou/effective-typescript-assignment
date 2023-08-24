import Computer from "../model/Computer";
import Player from "../model/Player";
import {printEnd, printScore, printStart} from "../view/OutputView";
import {close, readPlayerCommand, readRetryCommand} from "../view/InputView";
import {BallCounts, Referee} from "../model/Referee";
import {COMMAND} from "../constants/Controller";

export default class BaseballManager {
  #computer: Computer;
  #player: Player;
  #referee: Referee;
  #score: BallCounts;

  constructor() {
    this.#referee = new Referee();
    this.start();
  }

  start = () => {
    this.#computer = new Computer();
    this.#player = new Player();
    printStart();
    readPlayerCommand(this.sendPlayerCommand);
  }

  sendPlayerCommand = (input: string) => {
    this.#player.setNumber(input);
    this.check();
  }

  check = () => {
    const playerNumber = this.#player.getNumber();
    const computerNumber = this.#computer.getNumber();
    this.#score = this.#referee.check(playerNumber, computerNumber);
    printScore(this.#score);
    this.option();
  }

  option = () => {
    if (this.#score.clear) {
      printEnd();
      readRetryCommand(this.retry);
    } else {
      readPlayerCommand(this.sendPlayerCommand);
    }
  }

  retry = (command: string) => {
    if (command === COMMAND.retry) {
      this.start();
    } else if (command === COMMAND.exit) {
      close();
    }
  }
}