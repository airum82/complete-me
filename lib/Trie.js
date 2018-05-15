import Node from './Node.js';

export default class Trie {
  constructor() {
    this.insertions = {};
    this.root = new Node();
  }

  insert(word) {
    let insertionsArray = Object.keys(this.root);
    let wordNode = new Node(word)
    this.insertions[word] = wordNode;
  }

  count() {
    let insertionsArray = Object.keys(this.insertions);
    return insertionsArray.length;
  }

  suggest(entry) {
    this.insertions.filter(wordNode => {
      return wordNode.data.includes(entry);
    })
  }
}