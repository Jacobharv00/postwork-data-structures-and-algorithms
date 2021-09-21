function findFirstDuplicate ( arr ) {
  // This Set object will allow me to store each element from the given array as a unique value, and check if it already contains a value using two functions: Set.add() and Set.has().
  let elementSet = new Set()

  // for of loop to look at each element of the array
  for (element of arr) {
    // check to see if element exists and if so return
    if ( elementSet.has( element ) ) {
      return element
    } 
    // if not add element to elementSet
    elementSet.add(element)
  }
  //  If no duplicates were found return -1
  return -1
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log( "=>", findFirstDuplicate( [ 1, 2, 3, 4 ] ) );
  

  console.log('my test1', findFirstDuplicate([1,2,2,3,4,5,5,6,6,7,7,8,8,9,9]))

  console.log('my test2', findFirstDuplicate([1,2,3,4,5,6,7,8,9]))


}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// add code in findFirstDuplicate function that looks at the length of the array
// check of each element in the array is the same or not
// return updated array with no duplicates

// My solution to this problem was to use new Set() and then loop through the array to check to see if the Set already contains the
// element that we're currently on in the loop if it exists, then we've found our first duplicate.
// If the element isn't in the Set yet add it to the Set and move on to the next element in the array.
// If no duplicates are found return a string saying No Duplicates
