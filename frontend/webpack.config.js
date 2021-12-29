const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const mode = process.env.NODE_ENV !== 'production' ? "development" : "production";

module.exports = {
    mode: mode, // 배포시 production으로
    name: "ToDoTogether",

    resolve: {
        extensions: [".js",".jsx"]
    },
    entry: {
        main: "./index"
    },
    module: {
        rules: [
            {
                test:/\.(js||jsx)$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"],
                    plugins: mode !== "poduction" ?["react-refresh/babel",["transform-remove-console", {exclude: ["error","warn","log"]}]] : 
                                                   [["transform-remove-console"],"react-refresh/babel"]
                },
            },
            {
                test:/\.css$/,
                use: ["css-loader","style-loader"],
            },
            {
                test:/\.(png||jpg||gif||svg)$/,
                loader: "file-loader"
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ReactRefreshWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        devMiddleware: {publicPath: "/"},
        static: path.resolve(__dirname, "./dist"),
        hot: true
    }
}