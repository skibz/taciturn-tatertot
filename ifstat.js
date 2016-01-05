
'use strict';

var chunk = require('blow-chunks');
var child_process = require('child_process');

module.exports = function(ifaces, tick) {
  var ifstat = child_process.spawn('ifstat', [
    '-w', '-n', '-i', ifaces.join(',')
  ]), firstTick = true;

  ifstat.stdout.on('data', function(data) {
    if (!firstTick) {
      return tick(
        chunk(
          data.toString().trim().split(/\s/g).filter(function(line) {
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
