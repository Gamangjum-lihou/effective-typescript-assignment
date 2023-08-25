const VALIDATION = {
  REG_EXP: /^[0-9]+$/g,
  LENGTH: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  INVALID_NUMBER: 0,
} as const;

module.exports = { VALIDATION };
