declare module '@woowacourse/mission-utils' {
  class Console {
    static close(): void;
    static print(message: string): void;
    static readLine(message: string, callback: Function): void;
  }

  class Random {
    static pickNumberInRange(start: number, end: number): number;
  }
}
