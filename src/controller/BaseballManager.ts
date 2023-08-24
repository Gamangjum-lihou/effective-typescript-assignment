import Computer from "../model/Computer";
import Player from "../model/Player";
import {printStart} from "../view/OutputView";
import {readPlayerCommand} from "../view/InputView";

export default class BaseballManager {
  #computer: Computer;
  #player: Player;

  constructor() {
    this.#computer = new Computer();
    this.#player = new Player();
    this.start();
  }

  start = () => {
    printStart();
    readPlayerCommand(this.sendPlayerCommand);
  }

  sendPlayerCommand = (input: string) => {
    this.#player.setNumber(input);
    this.check();
  }

  check = () => {
    console.log(this.#player.getNumber());
    console.log(this.#computer.getNumber());
  }
}