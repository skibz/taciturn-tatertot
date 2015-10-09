
'use strict';

module.exports = function(size) {
  return [].concat.apply([], this.map(function(element, index) {
    return index % size ? [] : [this.slice(index, index + size)];
  }, this));
};
