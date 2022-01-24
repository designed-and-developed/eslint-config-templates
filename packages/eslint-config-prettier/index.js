module.exports = {
  extends: [
    "airbnb",
    "prettier",
  ],
    env: {
      browser: true,
      es6: true,
    },
    plugins: ["prettier"],
    globals: {},
    rules: {
      // prettier
      "prettier/prettier": ["error"],
       // import
       "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
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