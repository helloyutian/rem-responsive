const path = require('path')

var config = {
  entry: './src/index.ts',
  target: ['web', 'es5'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '',
    // 核心配置    
    library: {
      name: 'RemResponsive',   // 全局变量名（通过 script 标签引入后，可通过 window.MyPlugin 访问）
      type: 'umd',             // 通用模块定义（兼容 AMD、CommonJS、全局变量）
      export: 'default',       // 直接导出默认模块（跳过 .default）
    },
    globalObject: 'this'        // 兼容不同环境的全局对象（浏览器中是 window，Node 中是 global）
  },
  devtool: 'nosources-source-map', // 'hidden-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /  /,
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }
    ]
  }
}
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production' || false;
  config.output.filename = isProd ? 'rem-responsive.min.js' : 'rem-responsive.js'
  return config
}