import View from '../View';
import Model from '../Model/index';
import runGenerator from '../utils/runGenerator';
import { SELECT_FINISH } from '../constants/System';

class BaseballController {
  #view: typeof View;
  #model: Model;

  constructor() {
    this.#view = View;
    this.#model = new Model();
  }

  play() {
    this.#view.printStart();
    runGenerator(this.#run.bind(this));
  }

  *#run(): Generator<unknown> {
    this.#model.setGame();
    while (true) {
      const userNumbers = yield this.#view.readGameNumbers;
      const score = this.#model.compareUserWithComputerNumbers(userNumbers as string);
      this.#view.printHint(score);
      if (this.#model.isThreeStrikes()) {
        this.#view.printSuccess();
        break;
      }
    }

    const userSelect = yield this.#view.readGameCommand;
    if (userSelect === SELECT_FINISH) {
      this.#view.finishGame();
      return;
    }

    yield* this.#run();
  }
}

export default BaseballController;
