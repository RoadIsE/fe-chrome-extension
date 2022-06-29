const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WindiCSSWebpackPlugin = require("WindiCSS-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

// 处理样式
const getStyleLoaders = (pre) => {
  return [
    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    pre,
  ].filter(Boolean);
};

// 处理popup.html和options.html
const getHtmlPlugins = (chunks) => {
  return chunks.map(
    (chunk) =>
      new HtmlWebapckPlugin({
        title: "React Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
};

module.exports = {
  // 添加多入口
  entry: {
    popup: path.resolve("src/popup/popup.tsx"),
    options: path.resolve("src/options/options.tsx"),
    background: path.resolve("src/background/background.ts"),
    contentScript: path.resolve("src/contentScript/contentScript.tsx"),
  },
  output: {
    path: isProduction ? path.resolve("dist") : undefined,
    filename: "static/js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/i,
        use: getStyleLoaders("less-loader"),
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  // 设置引用的模块
  resolve: {
    extensions: [".tsx", ".ts", "js"],
    alias: {
      "@": path.join(__dirname, "..", "src"),
    },
  },
  plugins: [
    new WindiCSSWebpackPlugin({
      virtualModulePath: "src",
    }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
        chunkFilename: "static/css/[name].chunk.css",
      }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve("src/static"), to: path.resolve("dist") },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript" && chunk.name !== "background";
      },
    },
  },
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "cheap-module-source-map",
  performance: false,
};
