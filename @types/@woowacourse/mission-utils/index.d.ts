declare module '@woowacourse/mission-utils' {
  class Console {
    static close(): void;
    static print(message: string): void;
    static readLine(input: string, callback: (input: string) => void): void;
  }

  class Random {
    static pickNumberInRange(start: number, end: number): number;
  }
}
