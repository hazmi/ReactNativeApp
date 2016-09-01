/* eslint import/no-extraneous-dependencies: 0, no-underscore-dangle: 0 */

const fs = require('fs');
const path = require('path');
const babel = require('babel-core');

const origJs = require.extensions['.js'];

require.extensions['.js'] = (module, fileName) => {
  let returnFileName = fileName;
  if (returnFileName.indexOf('/react-native/react-native.js') >= 0) {
    returnFileName = path.resolve('./test/mocks/react-native.js');
  }
  if (returnFileName.indexOf('styles.js') >= 0) {
    returnFileName = path.resolve('./test/mocks/styles.js');
  }
  if (returnFileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, returnFileName);
  }
  const src = fs.readFileSync(returnFileName, 'utf8');
  const output = babel.transform(src, {
    filename: returnFileName,
  }).code;

  return module._compile(output, returnFileName);
};
