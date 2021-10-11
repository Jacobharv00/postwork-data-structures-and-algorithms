// function selectionSort ( arr ) {
//   let ordered = arr.sort( ( a, b ) => a - b )
//   return ordered
// }

function selectionSort ( arr ) {
  const sortedArr = []

  while ( arr.length > 0 ) {
    let min = Math.max( ...arr ) //gives us lowest number in array
    let index = arr.indexOf( min ) // find the index of minimum 
    sortedArr.unshift( min ) // push minimum number into new array
    arr.splice( index, 1 ) // remove that number and continue thru loop
  }
  return sortedArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution


// Input: [ 3, -1, 5, 2 ]
// Output: [ -1, 2, 3, 5 ]

// Sort an Array of integers using selection sort.
// Look for the lowest value integer and place it in correct order (Sorted)
// Loop through and check one element to next element and see if it is greater and order it by that. 
// Main thing we want to do is compare two numbers together and see if left is greater than right and if so move right 1. 
// If the result is negative then A is sorted before B
//  If it is positive then B is sorted before A
//  If 0 then it does nothing and just returns. (Already sorted)
