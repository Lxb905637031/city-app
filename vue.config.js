const path = require("path");
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@data": path.resolve(__dirname, "./src/assets/data"),
        "@image": path.resolve(__dirname, "./src/assets/images"),
        "@js": path.resolve(__dirname, "./src/assets/js"),
        "@styles": path.resolve(__dirname, "./src/assets/styles")
      }
    }
  }
};
