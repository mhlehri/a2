import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.node },

    files: ["**/*.ts"],
    rules: {
      eqeqeq: "error",
      "no-console": "warn",
      "no-undef": "error",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
    },
    ignores: [".config/*", "**/node_modules/", ".git/", "dist/**/*"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
