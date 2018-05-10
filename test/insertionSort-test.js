const insertionSortArray = require('../lib/insertionSort.js').insertionSortArray;
import { assert } from 'chai';

describe('test', function() {
  it('should sort an array of numbers from highest to lowest', function() {
    let unsortedArray = [6, 3, 9, 2, 5]
    assert.deepEqual(insertionSortArray(unsortedArray), [9, 6, 5, 3, 2])
  })
})