let unsortedArray = [6, 3, 9, 2, 5];
let newArray = []

const insertionSortArray = array => {
//should take an array and separate first item into own array.
//should take new first item of array and compare it to new array.
//should make larger item of the two the new first item of new array.
//should repeat until the new array is composed of original array items sorted from largest to smallest
  for(let i = array.length; i > 0; i--) {
     //take first item from array
    let firstItem = array.shift();
    //push first item into new array
    newArray.push(firstItem);
    for(let j = 0; j < newArray.length; j++) {
      if(newArray[j] < newArray[j + 1]) {
        //if new item is larger than current item, switch indices.
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }
  return newArray;
}

module.exports = {insertionSortArray};