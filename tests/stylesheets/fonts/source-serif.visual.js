const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'fonts-source-serif',
      'url': util.urlForTest(__filename),
      'viewports': [viewports.desktop]
    }
  ];
}