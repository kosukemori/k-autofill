module.exports = {
  entry: { 
    "main": './dist_babel/main.js'
  }, 
  output: {
    //path: "./dist_webpack",
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel"}
    ]
  }
};
