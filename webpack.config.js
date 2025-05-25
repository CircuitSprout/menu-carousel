const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js", // Main JS entry point
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // Clean dist folder before build
    },
    devtool: "eval-source-map", // Source maps for easier debugging
    devServer: {
        port: 8080,
        watchFiles: ["./src/template.html"],
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", // Your HTML template
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JS files
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            // CSS Modules: Only for CSS files in src with .module.css extension
            {
                test: /\.module\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            // Global CSS: For all other CSS files
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // HTML: Import HTML files as strings if needed
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            // Images: Import images (png, jpg, jpeg, gif, svg)
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".json"],
    },
};