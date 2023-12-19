const { ModuleFederationPlugin } = require('webpack').container


module.exports = {
  mode: 'development',
  devServer: {
    port: 3001
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'mfcontainer',
        remotes: {
          app1: 'app1@http://localhost:3000/remoteEntry.js'
        },
        shared: ['react', 'react-dom']
      })
    ]
  }
}
