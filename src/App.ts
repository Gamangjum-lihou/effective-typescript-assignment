import Controller from './controller/Controller';

class App {
  play() {
    const game = new Controller();
    game.start();
  }
}

export default App;

const app = new App();
app.play();
