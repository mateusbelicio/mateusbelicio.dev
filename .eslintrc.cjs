module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
};
