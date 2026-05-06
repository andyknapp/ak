import globals from "globals";

export default [
  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "prefer-const": "error",
    },
  },
];
