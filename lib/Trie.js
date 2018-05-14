export default class Trie {
  constructor() {
    this.insertions = 0;
  }

  insert(word) {
    this.insertions++;
  }

  count() {
    return this.insertions;
  }
}