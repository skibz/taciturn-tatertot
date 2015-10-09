
'use strict';

var expect = require('chai').expect;
var chunk = require('../chunk');

describe('chunk', function() {
  it('should split an array into chunks of a given length', function() {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
    expect(chunk.call(input, 2)).to.deep.equal(expected);
  });
});
