/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const moduleRoot = path.resolve(__dirname, '..');

module.exports = {
  watchFolders: [moduleRoot],
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      // 'react-native-linear-gradient': path.resolve(__dirname, 'node_modules/react-native-linear-gradient'),
      'react-native-reanimated': path.resolve(
        __dirname,
        'node_modules/react-native-reanimated',
      ),
      'react-native-gesture-handler': path.resolve(
        __dirname,
        'node_modules/react-native-gesture-handler',
      ),
    },
    blockList: exclusionList([
      new RegExp(`${moduleRoot}/node_modules/react/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native-reanimated/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native-gesture-handler/.*`),
      // new RegExp(`${moduleRoot}/node_modules/react-native-linear-gradient/.*`),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
