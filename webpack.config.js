const path = require("path");

module.exports = {
  mode: "production",
  watch: true,
  entry: "./src/index.js",
  output: {
    filename: "calendarPlanner.js",
    path: path.resolve(__dirname, "dist/code"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
