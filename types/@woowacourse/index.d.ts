declare module '@woowacourse/mission-utils' {
  class Console {
    static readLine(message: string, callback: (input: string) => void): void;
    static print(message: string): void;
    static close(): void;
  }

  class Random {
    static pickNumberInRange(start: number, end: number): number;
  }
}
