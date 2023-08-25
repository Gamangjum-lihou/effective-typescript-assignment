const convertToNumberArray = (input: string) => {
  return input.split('').map(Number);
};

module.exports = { convertToNumberArray };
