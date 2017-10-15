// This file isn't transpiled, so CommonJS and ES5

// Transpile before tests run
require('babel-register')()

// Disable webpack features that Moch doesn't understand.
require.extensions['.css'] = function() {}
