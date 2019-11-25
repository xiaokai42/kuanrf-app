module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: '8088',
    open: false,
    proxy: {
      '/api': {
        target: 'http://www.kuanrf.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 32, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {
    // 关闭 webpack 的性能提示
    performance: {
      hints: false
    }
  }
}
