const path = require('path');
const { override, addWebpackAlias, overrideDevServer } = require('customize-cra');

const disableBrowserOpen = () => (config) => {
  config.open = false;
  return config;
};

module.exports = {
  webpack: override(
    addWebpackAlias({
      '~': path.resolve(__dirname, 'src'),
      '~comp': path.resolve(__dirname, 'src/components'),
    })
  ),
  devServer: overrideDevServer(
    disableBrowserOpen()
  ),
};
