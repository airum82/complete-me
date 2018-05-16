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
    assert.deepEqual(trie.root.children.p.children.i.data, 'i');
    // assert.deepEqual(trie.count(), 2);
  })
  it('trie.root should contain new node as child', () => {
    assert.deepEqual(trie.root, { data: null, parent: null, children: {} });
    trie.insert('pizza');
    assert.deepEqual(trie.count(), 6);
    assert.deepEqual(trie.root.p, 'p');
  })
  it('should increment the count upon each insertion', () => {
    trie.insert('word');
    trie.insert('would');
    assert.deepEqual(trie.root.children.data, ['w']);
    // assert.deepEqual(trie.root.children, ['w']);
  })
  it('should insert new node with prefix matching data as child of prefix node', () => {
    trie.insert('piz');
    trie.insert('pizza');
    assert.deepEqual(trie.insertions[0].children[0].data, 'pizza');
  })
  describe('trie.suggest', () => {
    it('should have an suggest method', () => {
    assert.isFunction(trie.suggest)
  })
  it('should suggest possible words based on letter(s) entered', () => {
    trie.insert('pizza');
    assert.equal(trie.suggest('piz'), 'pizza');
  })
  })
});