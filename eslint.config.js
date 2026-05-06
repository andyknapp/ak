import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config({
  files: ["src/js/**/*.ts"],
  extends: [tseslint.configs.recommended],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    "no-console": "warn",
    "eqeqeq": ["error", "always"],
  },
});
