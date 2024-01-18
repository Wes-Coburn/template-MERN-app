module.exports = {
  root: true,
  env: { browser: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:vitest/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'vite.config.ts',
    'tailwind.config.js',
    'dist',
    'build',
  ],
  rules: {
    'no-constant-binary-expression': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-key': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
