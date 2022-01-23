module.exports = {
    extends: ["eslint:recommended"],
    env: {
      browser: true,
      es6: true,
    },
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