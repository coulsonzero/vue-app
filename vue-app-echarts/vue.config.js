const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3030,         // 端口号：默认8080
    host: 'localhost',  // ip地址：默认0.0.0.0
    open: false          // 自动打开浏览器新页面：默认false
  }
})
