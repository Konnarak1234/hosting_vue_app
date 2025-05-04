const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    allowedHosts: ['.ondigitalocean.app'], // or your exact domain
  },
};
