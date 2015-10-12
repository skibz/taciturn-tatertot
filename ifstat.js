
'use strict';

var child_process = require('child_process');

module.exports = function(ifaces, update) {
  var firstTick = true;
  var ifstat = child_process.spawn('ifstat', ['-w', '-n', '-i', ifaces.join(',')]);

  ifstat.stdout.on('data', function(data) {
    if (!firstTick) return update(data);
    firstTick = false;
  });

  ifstat.stderr.on('data', function(data) {
    console.log('ifstat error:', data.toString());
  });

  ifstat.on('close', function(code) {
    console.log('ifstat closed with code:', code);
  });
};
