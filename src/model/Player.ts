export default class Player {
  #number : number[] = [];

  setNumber(input: string) {
    this.#number = input.split('').map(Number);
  }

  getNumber() {
    return this.#number;
  }
}