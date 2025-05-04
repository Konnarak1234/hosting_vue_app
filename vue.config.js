const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  server: {
    host: true, // or '0.0.0.0'
  },
})
