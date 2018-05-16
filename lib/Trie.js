import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }

  insert(word) {
    let letterArray = [...word.toLowerCase()];
    let currentNode = this.root;
    letterArray.forEach(letter => {
      if(!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
        //if no new children created, don't increase word count.
      }
      currentNode = currentNode.children[letter];
    });
    if(!currentNode.completedWord) {
      this.count++;
      currentNode.completedWord = word;
    }
  };

  counter() {
    return this.count;
  };

  suggest(entry) {
    let entryArray = [...entry.toLowerCase()];
    let suggestions = [];
    let currentNode = this.root;
    entryArray.forEach(letter => {
      currentNode = currentNode.children[letter];
    });
    const search = node => {
      //basecase - everytime branch has completed word, completed wordsuggestions.push()
      if(node.completedWord) {
        suggestions.push(node.completedWord);
      }
      let nodeKeys = Object.keys(node.children);
       nodeKeys.forEach(key => {
        search(node.children[key]);
       });
    }; 
      search(currentNode);
      return suggestions;
  }
}