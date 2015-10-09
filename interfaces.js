
'use strict';

var child_process = require('child_process');
var colours = ['red', 'green', 'blue', 'yellow', 'white', 'magenta', 'cyan'];

module.exports = function(done) {
  child_process.exec('ifconfig -lu', function(err, stdout, stderr) {
    if (err) return done(err);
    var ifaces = stdout.toString().trim().split(' ');
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
  });
};
