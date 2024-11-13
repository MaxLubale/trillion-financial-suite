// next.config.js
module.exports = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Standard file extensions
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@views': path.join(__dirname, 'views'),  // Alias for the views folder
      };
      return config;
    },
  };
  