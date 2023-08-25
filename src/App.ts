const baseballGamePresenter = require('./presenter/BaseballGamePresenter');

class App {
  #baseballGamePresenter = new baseballGamePresenter();

  play() {
    this.#baseballGamePresenter.run();
  }
}

module.exports = App;
