var PORT =  process.env.PORT || 8080;
var config = {
   
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;