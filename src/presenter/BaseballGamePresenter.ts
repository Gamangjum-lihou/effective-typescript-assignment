const { printStart } = require('../view/View');
const baseballGame = require('../model/BaseballGame');

class BaseballGamePresenter {
  baseballGame = new baseballGame();

  constructor() {
    printStart();
  }

  run() {}
}

module.exports = BaseballGamePresenter;
