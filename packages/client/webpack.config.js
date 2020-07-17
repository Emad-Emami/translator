const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function webpackConfig() {
  return {
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: ['ejs-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@containers': path.resolve(__dirname, 'src/containers/'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
        '@hocs': path.resolve(__dirname, 'src/hocs/'),
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        favicon: './public/favicon.ico',
      }),
    ],
    devServer: {
      contentBase: './dist',
      port: 9000,
      hot: true,
    },
  };
}

module.exports = webpackConfig;
