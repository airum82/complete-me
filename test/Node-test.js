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
  it('should have a children property', () => {
    assert.deepEqual(node.children, {});
  })
});