const { createMetroConfiguration } = require('expo-yarn-workspaces');

const config = createMetroConfiguration(__dirname);

// hot-reload file type
// cjs is needed for superstruct: https://github.com/ianstormtaylor/superstruct/issues/404#issuecomment-800182972
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'text-js',
  'd.ts',
  'cjs',
  'min.js',
];
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  fs: require.resolve('react-native-level-fs'),
  path: require.resolve('path-browserify'),
  stream: require.resolve('readable-stream'),
  crypto: require.resolve('react-native-crypto'),
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),
  net: require.resolve('react-native-tcp-socket'),
  tls: require.resolve('react-native-tcp-socket'),
};

config.transformer.minifierPath = 'metro-minify-terser';
config.watchFolders = [...config.watchFolders, '../'];

module.exports = config;
