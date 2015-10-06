
'use strict';

var child_process = require('child_process');

module.exports = function(done) {
  child_process.exec(
    'ifconfig -a | awk "/^[A-Za-z]+0:/ { print $1; }"',
    function(err, stdout, stderr) {
      done(err, (stdout.toString().trim().split('\n') || []).map(function(iface) {
        return iface.split(':')[0];
      }));
    }
  );
};
