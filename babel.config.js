const config = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-env',
  ],
  plugins: [],
};

const { COVERAGE } = process.env;

if (COVERAGE === 'true') {
  config.plugins.push('istanbul');
}

module.exports = config;
