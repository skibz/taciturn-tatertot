
'use strict';

var chunk = require('./chunk');
var child_process = require('child_process');

module.exports = function(ifaces, tick) {
  var firstTick = true;
  var ifstat = child_process.spawn('ifstat', ['-w', '-n', '-i', ifaces.join(',')]);

  ifstat.stdout.on('data', function(data) {
    if (!firstTick) {
      return tick(
        chunk.call(
          data.toString().trim().split(
            /\s/g
          ).filter(function(line) {
            return line !== '';
          }), 2
        )
      );
    }
    firstTick = false;
  });

  ifstat.stderr.on('data', function(data) {
    console.log('ifstat error:', data.toString());
  });

  ifstat.on('close', function(code) {
    console.log('ifstat closed with code:', code);
  });
};
