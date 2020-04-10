module.exports = {
  // publicPath: '/grupo-alta/',
  publicPath: '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_base.scss";` 
      },
    }
  }
}