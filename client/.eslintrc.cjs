module.exports = {
  root: true,
  env: { browser: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vitest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react-refresh"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist", "build", ".eslintrc.cjs", "vite.config.ts"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
