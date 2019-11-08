module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 140],
    'subject-case': [2, 'never', ['start-case', 'pascal-case']],
  },
};
