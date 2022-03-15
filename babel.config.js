const alias = { '^@/(.+)': './src/\\1' };
const extensions = ['.android.js', '.ios.js', '.js', '.json', '.native'];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', { alias, extensions }],
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv'],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
