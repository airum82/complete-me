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
  it('should take one argument and create a new node for each letter the first time', () => {
    trie.insert('pizza');
    assert.deepEqual(trie.count(), 6);
  })
  it('trie.root should contain new node as child', () => {
    assert.deepEqual(trie.root, Node { data: null, parent: null, children: {} });
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
  it('should have an suggest method', () => {
    assert.isFunction(trie.suggest)
  })
  it.skip('should suggest possible words based on letter(s) entered', () => {
    trie.insert('pizza');
    trie.insert('pizzeria');
    trie.insert('apple');
    assert.equal(trie.suggest('piz'), ['pizza', 'pizzeria'])
  })
});