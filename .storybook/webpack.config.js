module.exports = async ({ config, mode }) => {
  config.resolve.extensions.push('.scss');

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  });

  return config;
};
