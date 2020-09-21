const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const webpack = require("webpack")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

const isDevMode = process.env.NODE_ENV === "development"
const isProdMode = !isDevMode

const filename = ext => isDevMode ? `[name].${ext}` : `[name].[contenthash].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDevMode,
                reloadAll: true
            }
        },
        "css-loader"
    ]

    if (extra)
        loaders.push(extra)

    return loaders
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if (isProdMode)
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]


    return config
}

const babelOptions = preset => {
    const opt = {
        presets: [
            "@babel/preset-env"
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties",
        ]
    }

    if (preset)
        opt.presets.push(preset)

    return opt
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            filename: "./views/index.html",
            template: "./views/index.html",
            inject: true,
            excludeChunks: [],
            minify: {
                collapseWhitespace: isProdMode
            }
        }),
        new HTMLWebpackPlugin({
            filename: "./views/work.html",
            template: "./views/work.html",
            inject: true,
            excludeChunks: [],
            minify: {
                collapseWhitespace: isProdMode
            }
        }),
        new CleanWebpackPlugin({
            verbose: isDevMode,
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist/**/*')]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                },
                {
                    from: path.resolve(__dirname, "src/back/"),
                    to: path.resolve(__dirname, "dist/")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename("css")
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ]

    if (isProdMode)
        base.push(new BundleAnalyzerPlugin())

    return base
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: [
            "@babel/polyfill",
            "./js/app.js"
        ],
        debug: "./js/AppDebug.js",
        bootstrap: "./js/bootstrap.js",
        fontawesome: "./js/fontawesome.js"
    },
    output: {
        filename: filename("js"),
        path: path.resolve(__dirname, "dist/public/"),
        publicPath: "/public/"
    },
    resolve: {
        extensions: [".js", ".json", ".xml"],
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@css": path.resolve(__dirname, "src/css"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@img": path.resolve(__dirname, "src/assets/img"),
            "@fonts": path.resolve(__dirname, "src/assets/fonts")
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDevMode
    },
    devtool: isDevMode ? "source-map" : "",
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders("less-loader")
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader")
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                loader: {
                    loader: "file-loader",
                    options: {
                        name: "./images/[name].[ext]",
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: {
                    loader: "file-loader",
                    options: {
                        name: "./fonts/[name].[ext]",
                    }
                }
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: babelOptions()
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-typescript")
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-react")
                }
            }
        ]
    }
}