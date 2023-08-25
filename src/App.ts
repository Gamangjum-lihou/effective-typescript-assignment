const Controller = require('./controller/Controller');

class App {
  play() {
    const game = new Controller();
    game.start();
  }
}

module.exports = App;

const app = new App();
app.play();
