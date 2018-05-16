import Trie from '../lib/Trie.js';
import { assert } from 'chai';


describe('test', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  })
  it('should have an insert method', () => {
    assert.isFunction(trie.insert)
  })
  it('should have a count method', () => {
    assert.isFunction(trie.count)
  })
  it('should start off with a count of 1 for the root node', () => {
    assert.deepEqual(trie.count(), 1);
  })
  it.only('should take one argument and create a new node for each letter. Each letter should be a child of the previous letter', () => {
    trie.insert('pizza');
    trie.insert('apple');
    console.log(JSON.stringify(trie, null, 4));
    assert.deepEqual(trie.root.children.p.children.i.data, 'i');
    // assert.deepEqual(trie.count(), 2);
  })
  it('trie.root should contain new node as child', () => {
    assert.deepEqual(trie.root, { data: null, parent: null, children: {} });
    trie.insert('pizza');
    assert.deepEqual(trie.count(), 1);
    assert.deepEqual(trie.root.p.data, 'p');
  })
  describe('trie.suggest', () => {
    it('should have an suggest method', () => {
    assert.isFunction(trie.suggest)
  })
  it.only('should suggest possible words based on letter(s) entered', () => {
    trie.insert('pizza');
    console.log(JSON.stringify(trie.root.children));
    assert.deepEqual(trie.suggest('piz'), ['pizza']);
  })
  })
});