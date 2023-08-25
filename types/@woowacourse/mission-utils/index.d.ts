declare module '@woowacourse/mission-utils' {
  class Console {
    static close(): void;
    static print(message: string): void;
    static readLine(query: string, callback: () => void): void;
  }

  class Random {
    static pickNumberInRange(
      startInclusive: number,
      endInclusive: number
    ): number;
  }
}
