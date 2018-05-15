export default class Node {
  constructor(data, parent) {
    this.data = data || null;
    this.parent = parent || null;
    this.children = {};
  }

  addChild(node) {
    let childArray = Object.keys(this.children);
    childArray.forEach(child => {
      if(child === node.data) {
        return;
      }
    })
    
    this.children[node.data] = node;
    node.parent = this;
  }
}