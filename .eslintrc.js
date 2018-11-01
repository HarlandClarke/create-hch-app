module.exports = {
  extends: [
    'eslint:recommended'
  ],
  env: {
    node: true
  },
  rules: {
    'arrow-parens': ['off'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-undef': ['warn'],
    'no-unused-vars': ['warn']
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7
  }
}