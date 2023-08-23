import {GENERATE_NUMBER} from "../constants/generateNumber";
import {Random} from "@woowacourse/mission-utils";

class Computer {
  #number:number[] = [];

  constructor() {
    this.generate();
  }

  generate() {
    while (this.#number.length < GENERATE_NUMBER.length) {
      const number = Random.pickNumberInRange(GENERATE_NUMBER.startNum, GENERATE_NUMBER.endNum);
      if (!this.#number.includes(number)) {
        this.#number.push(number);
      }
    }
  }

  status() {
    console.log(this.#number);
  }
}

const computer = new Computer();
computer.status();