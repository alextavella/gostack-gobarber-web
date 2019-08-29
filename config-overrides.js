const path = require('path');
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');

const client = process.env.REACT_APP_CLIENT;

module.exports = (config, env) => {
  config = rewireAliases.aliasesOptions({
    '~': path.resolve(__dirname, `${paths.appSrc}/`),
  })(config, env);

  return config;
};
