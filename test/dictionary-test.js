const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

import fs from 'fs';
import Trie from '../lib/Trie.js';
import Node from '../lib/Node.js';
import { assert } from 'chai';

describe.only('Trie', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  })
  it('should have a populate method', () => {
    assert.isFunction(trie.populate);
  })
  it('should take in an array of words and add all to the trie', () => {
    trie.populate(dictionary);
    assert.equal(trie.counter(), 234371);
    
  })
  it('suggest method should work with new dictionary words', () => {
    trie.populate(dictionary);
    assert.equal(trie.suggest('apple'), []);
  })
});
  