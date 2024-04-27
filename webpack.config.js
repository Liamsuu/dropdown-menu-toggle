const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  experiments: {
    outputModule: true,
  },
  output: {
    filename: "toggle-dropdown.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true, // keep function names
        },
      }),
    ],
  },
};
