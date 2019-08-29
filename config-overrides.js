const { addBabelPlugin, disableEsLint, override } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    }
  ])
);
