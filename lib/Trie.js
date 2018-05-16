import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }

  insert(word) {
    let insertionsArray = Object.keys(this.root);
    let wordArray = word.split('');
    let currentNode = this.root;
    for(let i = 0; i < wordArray.length; i++) {
      currentNode.children[wordArray[i]] = new Node(wordArray[i]);
      console.log(currentNode);
      currentNode = currentNode.children[wordArray[i]];
    }
    this.count++;
  }

  count() {
    return this.count;
  }

  suggest(entry) {
    let entryArray = entry.split('');
    let currentNode = this.root.children;
    console.log(currentNode);
    let suggestedWord = ''
    let i = 0
    while(currentNode.children !== {}) {
      if(entry[i] === currentNode.data) {
        suggestedWord = suggestedWord + currentNode.data;
      }
      currentNode = currentNode.children;
    } return suggestedWord
  }
}