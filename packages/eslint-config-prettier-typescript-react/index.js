module.exports = {
    extends: [
      "airbnb/hooks",
      "@designed-and-developed/eslint-config-prettier-typescript"
    ],
    rules: {
      // React
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/function-component-definition": [
        2,
        {
          namedComponents: ["function-declaration", "arrow-function", "function-expression"]
        },
      ],
    },
    
  };