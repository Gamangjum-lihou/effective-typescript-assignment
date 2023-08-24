import Computer from "../model/Computer";
import Player from "../model/Player";

export default class BaseballManager {
  #computer: Computer;
  #player: Player;

  constructor() {
    this.#computer = new Computer();
    this.#player = new Player();
  }

  status() {
    this.#computer.status();
  }
}