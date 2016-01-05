
'use strict';

var colours = [
  'red', 'green', 'blue',
  'yellow', 'white', 'magenta', 'cyan'
], os = require('os');

if (['linux', 'darwin'].indexOf(process.platform) < 0) {
  console.log('Sorry, this program does not yet support your platform!');
  console.log('Perhaps you can help add support? https://github.com/skibz/taciturn-tatertot');
  process.exit(1);
}

module.exports = function(done) {
  var ifaces = Object.keys(os.networkInterfaces());
  done(null, {
    list: ifaces,
    rx: ifaces.map(function(iface, i) {
      return {
        title: iface + ' rx',
        style: {line: colours[i]},
        x: [], y: []
      };
    }),
    tx: ifaces.map(function(iface, i) {
      return {
        title: iface + ' tx',
        style: {line: colours[i]},
        x: [], y: []
      };
    })
  });
};
