import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.node } },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "warn",
      "no-empty-function": "warn",
    },
    ignores: [".config/*", "node_modules", "dist"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
