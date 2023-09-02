import BaseballController from './Controller';

class App {
  #controller;
  constructor() {
    this.#controller = new BaseballController();
  }

  play() {
    this.#controller.play();
  }
}

export default App;

const app = new App();
app.play();
