module.exports = {
  entry: [
    './test/test.ts',
    './test/test-babel.js'
  ],
  output: {
    path: './test',
    filename: 'test.build.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src/,
        loader: 'babel'
      }
    ]
  }
}
