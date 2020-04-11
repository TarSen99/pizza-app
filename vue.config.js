'use strict'
const path = require('path')
const VueLoader = require('vue-svg-inline-loader')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const compressionTest = /\.(js|css|json|txt|ico|svg)(\?.*)?$/i


const productionPlugins = [
  // new CompressionPlugin({
  //   filename: '[path][query]',
  //   algorithm: "gzip",
  //   test: compressionTest,
  //   minRatio: 0.8,
  //   compressionOptions: {
  //     level: 9
  //   },
  // })
]

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  runtimeCompiler: true,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: {
      filename: `[name].css`,
      chunkFilename: `[name].css`
    },
  },
  devServer: {
    disableHostCheck: true,
    port: 2222,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  chainWebpack(config) {
    config.plugins.delete('preload') 
    config.plugins.delete('prefetch') 

    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')


    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        options.modules = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              minSize: 30000,
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'Test chess',
    resolve: {
      alias: {
        '@': resolve('src'),
        '@components': resolve('src/components'),
      }
    },
    plugins: [
      ... (
        (process.env.NODE_ENV !== 'development' ? productionPlugins : [])
      )
    ],
    output: {
      filename: `[name].js`,
      chunkFilename: `[name].js`
    }
  }
}
