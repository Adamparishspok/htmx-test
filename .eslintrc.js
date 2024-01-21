module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    // Uncomment the next line if you're using React
    // 'plugin:react/recommended',
    // Add 'prettier' last in the array to override other configs
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Your custom rules here
    // Example: 'no-unused-vars': 'warn'
  },
};
