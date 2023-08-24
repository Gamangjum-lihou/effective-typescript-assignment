import BaseballManager from "./controller/BaseballManager";

export default class App {
  play() {
    const manager = new BaseballManager();
  }
}

const app = new App();
app.play();
