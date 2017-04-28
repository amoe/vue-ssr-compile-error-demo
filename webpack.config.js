const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
    target: 'node',
    output: {
        filename: "bundle.js",
        libraryTarget: 'commonjs2'
    },
    entry: "./nonexistent.js",
    plugins: [
        new VueSSRServerPlugin()
    ]
};
