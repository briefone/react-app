import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Add settings for React to use the automatic runtime and auto-detect version
    settings: {
      react: {
        version: "detect",
        runtime: "automatic",
      },
    },
    rules: {
      // Disable the rule requiring React in scope (for React 17+ with the new JSX transform)
      "react/react-in-jsx-scope": "off",
      // Allow the 'css' prop (used by Emotion)
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
    },
  },
];
