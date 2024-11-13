// next.config.js
const path = require('path');  // Optional if you still need path functions

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Standard file extensions
  webpack: (config) => {
    // No need for alias anymore if your pages directory is named 'pages'
    return config;
  },
};

  