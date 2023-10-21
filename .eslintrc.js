module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "prettier"],
};
