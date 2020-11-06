module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "babel-plugin-root-import"
      ]
    ],
    env: {
      production: {
        plugins: [
          "ignite-ignore-reactotron",
          "babel-plugin-root-import"
        ]
      }
    }
  };
};
