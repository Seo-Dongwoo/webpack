//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export 
module.exports = {
  // parcel main.js
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // __dirname은 현재 webpack.config.js가 있는 파일의 경로를 의미, 두번째 인수는 폴더명!
    // 절대 경로를 입력해주어야 한다.
    // filename: 'main.js',
    clean: true
    // 원래 있던 파일을 지워주는 역할.
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],
  devServer: {
    host: 'localhost'
  }
}