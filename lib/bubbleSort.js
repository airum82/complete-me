let unsortedArray = [6, 3, 9, 2, 5];

const sortArray = (array) => {
  //should take an unsorted array.
  //should compare first index to second to see which one is larger.
  //should move larger item to higher index in the array.
  //should repeat with each item until array is ordered from smallest to largest.
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

module.exports = {sortArray};