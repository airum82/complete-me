import Node from '../lib/Node.js';
import { assert } from 'chai';

describe('Node', () => {
  let node;
  beforeEach(() => {
    node = new Node('a');
  })
  it('should have a data property', () => {
    assert.equal(node.data, 'a');
  })
  it('should have a parent property', () => {
    assert.equal(node.parent, null);
  })
  it('should have a children property', () => {
    assert.deepEqual(node.children, {});
  })
  describe('#addChild', () => {
    it('should have an add child method', () => {
      assert.isFunction(node.addChild);
    })
    it('should add a child', () => {
      let childNode = new Node('p');
      node.addChild(childNode);
      assert.deepEqual(node.children, { p: childNode });
      assert.deepEqual(childNode.parent, node)
    })
    it('should not add childNode with duplicate data', () => {
      let childNode = new Node('p');
      let childNode2 = new Node('p')
      node.addChild(childNode);
      assert.deepEqual(node.children, { p: childNode });
      node.addChild(childNode2);
      assert.deepEqual(node.children, { p: childNode });
    })
    it('should not add childNode with duplicate data', () => {
      let childNode = new Node('p');
      let childNode2 = new Node('p')
      node.addChild(childNode);
      assert.deepEqual(node.children, [childNode]);
      node.addChild(childNode2);
      assert.deepEqual(node.children, [childNode]);
    })
  })
  // it('should take one argument and insert in a given place', () => {
  //   let node = new Node('a')
  //   trie.insert(node);
  //   assert.deepEqual(trie.head, 'a');
  // })
});