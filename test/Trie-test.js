import Trie from '../lib/Trie.js';
import { assert } from 'chai';


describe('Trie', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  })
  it('should have an insert method', () => {
    assert.isFunction(trie.insert)
  })
  it('should have a count method', () => {
    assert.isFunction(trie.counter)
  })
  it('should start off with a count of 0', () => {
    assert.deepEqual(trie.counter(), 0);
  })
  it('should take one argument and create a new node for each letter. Each letter should be a child of the previous letter', () => {
    trie.insert('pizza');
    trie.insert('pizzeria');
    console.log(JSON.stringify(trie, null, 4));
    assert.deepEqual(trie.root.children.p.children.i.data, 'i');
  })
  it('duplicate words should not increase the word count', () => {
    trie.insert('tree');
    trie.insert('car');
    trie.insert('car');
    assert.deepEqual(trie.counter(), 2);
  })
  it('trie.root should contain new node as child', () => {
    trie.insert('pizza');
    assert.deepEqual(trie.counter(), 1);
    assert.deepEqual(trie.root.children.p.data, 'p');
  })
  describe('trie.suggest', () => {
    it('should have an suggest method', () => {
    assert.isFunction(trie.suggest)
  })
  it('should suggest possible words based on letter(s) entered', () => {
    trie.insert('pizza');
    trie.insert('pizzeria');
    console.log(JSON.stringify(trie.root.children));
    assert.deepEqual(trie.suggest('piz'), ['pizza', 'pizzeria']);
  })
  })
});