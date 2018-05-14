import Trie from '../lib/Trie.js';
import { assert } from 'chai';

describe.only('test', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  })
  it('should have an insert method', () => {
    assert.isFunction(trie.insert)
  })
  it('should take one argument and insert in a given place', () => {
    trie.insert('pizza');
    assert.deepEqual(trie.count(), 1);
  })
  it('should increment the count upon each insertion', () => {
    trie.insert('pizza');
    trie.insert('steak');
    assert.deepEqual(trie.count(), 2);
  })
});