import View from '../View';

class BaseballController {
  #view: typeof View;

  constructor() {
    this.#view = View;
  }

  play() {
    this.#view.printStart();
  }
}

export default BaseballController;
