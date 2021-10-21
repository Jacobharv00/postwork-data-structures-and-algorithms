function selectionSortRecursive ( arr ) {
  if ( arr.length === 0 ) return []
  
  const min = Math.min( ...arr )
  const idx = arr.indexOf( min )
  arr.splice( idx, 1 )

  const result = selectionSortRecursive( arr )

  result.unshift( min )
  
  return result
}

selectionSortRecursive( [ 3, -1, 5, 2 ] )


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;



// SUDO BRUH
// an array is our input
// base case is if array is equal to 1
// every time our recursive function is called we need to check one element to the next and whichever is smaller push into new array.
// our array will contain integers


