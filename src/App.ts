import BaseballGamePresenter from './presenter/BaseballGamePresenter'

class App {
  #presenter = new BaseballGamePresenter()

  play() {
    this.#presenter.run()
  }
}

const app = new App()
app.play()

export default App
