module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["prettier"],
    globals: {},
    rules: {
      // prettier
      "prettier/prettier": ["error"],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
        },
      },
      "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
    },
  };