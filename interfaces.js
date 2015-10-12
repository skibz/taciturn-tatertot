
'use strict';

var child_process = require('child_process');
var colours = ['red', 'green', 'blue', 'yellow', 'white', 'magenta', 'cyan'];

module.exports = function(done) {

  if (process.platform === 'linux') {
    child_process.exec('ifconfig -s | awk \'$1 !~ /Iface/ {print $1}\'', function(err, stdout, stderr) {
      if (err) return done(err);
      var ifaces = stdout.toString().trim().split('\n');
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
  } else if (process.platform === 'darwin') {
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
  } else {
    console.log('Sorry, this program does not yet support your platform!');
    console.log('Perhaps you can help add support? https://github.com/skibz/taciturn-tatertot');
    process.exit(1);
  }
};
