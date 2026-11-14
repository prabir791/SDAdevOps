const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**", "eslint.config.js"],
  },
  js.configs.recommended,
  {
    files: ["app.js"],
    languageOptions: {
      globals: {
        console: "readonly",
      },
    },
  },
];
