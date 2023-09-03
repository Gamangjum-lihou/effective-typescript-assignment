module.exports = {
  extends: ['eslint:recommended', 'prettier', 'hijacking-ts'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
    // 함수의 매개변수 개수 제한
    'max-params': ['error', 4],
  },
  ignorePatterns: ['.eslintrc.js', '__tests__/**'],
};
