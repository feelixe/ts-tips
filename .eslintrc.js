module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // path to your tsconfig.json
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
