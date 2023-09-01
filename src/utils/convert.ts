type Convert = (input: string) => number[];

export const convertToNumberArray: Convert = (input) => {
  return input.split('').map(Number);
};
