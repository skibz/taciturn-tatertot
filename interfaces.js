
'use strict';

var child_process = require('child_process');
var colours = ['red', 'green', 'blue', 'yellow', 'white', 'magenta', 'cyan'];

module.exports = function(done) {

  var platform = process.platform, delimiter, command;

  if (platform === 'linux') {
    delimiter = '\n';
    command = 'ifconfig -s | awk \'$1 !~ /Iface/ {print $1}\'';
  } else if (platform === 'darwin') {
    delimiter = ' ';
    command = 'ifconfig -lu';
  } else {
    console.log('Sorry, this program does not yet support your platform!');
    console.log('Perhaps you can help add support? https://github.com/skibz/taciturn-tatertot');
    process.exit(1);
  }

  child_process.exec(command, function(err, stdout, stderr) {
    if (err) return done(err);
    var ifaces = stdout.toString().trim().split(delimiter);
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
