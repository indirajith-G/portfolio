  module.exports = function(api) {
  // Cache the configuration based on the environment (NODE_ENV).
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      'macros'
        ],
  };
};