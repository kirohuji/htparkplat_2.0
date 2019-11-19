const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'resize-detector'
  ],

  publicPath: './',
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // config.resolve.symlinks(false)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('package', resolve('./package.json'))
      .set('assets', resolve('src/assets'))
      .set('layout', resolve('src/layout'))
      .set('mixins', resolve('src/mixins'))
      .set('plugins', resolve('src/plugins'))
      .set('style', resolve('src/style'))
      .set('stories', resolve('src/stories'))
      .set('store', resolve('src/store'))
      .set('services', resolve('src/services'))
      .set('router', resolve('src/router'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/base'))
      .set('views', resolve('src/views'))
      .set('util', resolve('src/util'))
  }
}
