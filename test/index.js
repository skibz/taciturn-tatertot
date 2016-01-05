
'use strict';

var expect = require('chai').expect;
var interfaces = require('../interfaces');
var ifstat = require('../ifstat');

describe('interfaces', function() {
  it('should return an object with specific keys', function(done) {
    interfaces(function(err, ifaces) {
      expect(err).to.not.be.okay;
      expect(ifaces.list).to.be.okay;
      expect(ifaces.rx).to.be.okay;
      expect(ifaces.tx).to.be.okay;
      done();
    });
  });
  it('should have an array of interface names on the list key', function(done) {
    interfaces(function(err, ifaces) {
      expect(err).to.not.be.okay;
      expect(ifaces.list).to.be.an.instanceof(Array);
      expect(ifaces.list.length).to.be.gt(0);
      done();
    });
  });
});

describe('ifstat', function() {
  it('should invoke the function given as an argument', function(done) {
    this.timeout(5000);
    ifstat(['lo0'], done.bind(done, null));
  });
});
