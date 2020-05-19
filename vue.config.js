module.exports = {
  // publicPath: '/grupoalta/',
  publicPath: '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_base.scss";` 
      },
    }
  }
}