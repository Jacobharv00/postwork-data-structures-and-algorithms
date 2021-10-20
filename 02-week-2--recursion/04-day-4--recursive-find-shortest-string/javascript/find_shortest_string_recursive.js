function findShortestStringRecursive ( arr ) {
  // LINES 3-12 CLEANER SOLUTION
  //if ( arr.length === 1 ) return arr[ 0 ]
  
  // let first = arr[ 0 ]
  // let second = findShortestStringRecursive( arr.slice( 1 ) ) // slice makes copy non destructive
  
  // if ( first.length <= second.length ) {
  //     return first
  //   } else {
  //     return second
  // }
  
  // OUR SOLUTION
  let first = arr[ 0 ]
  let second = arr[ 1 ]
  
  while ( arr.length > 1 ) {
    if ( first.length <= second.length ) {
      arr.splice( 1, 1 )
      return findShortestStringRecursive( arr )
    } else {
      arr.splice( 0, 1 )
      return findShortestStringRecursive( arr )
    }
  }
  return first
}
console.log( findShortestStringRecursive( [ 'aaa', 'a', 'bb', 'ccc' ] ) )





if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));
  
  console.log("");
  
  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));
  
  console.log("");
  
  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// input is going to be an Array of strings.
// return the shortest string
// If there is more then one string with that same length return the first one.
// Array will have minimum length of 1
// wont be an empty string???

// Examples
// Input: ['aaa', 'a', 'bb', 'ccc']
// Output: 'a'

// Input: ['cat', 'hi', 'dog', 'an']
// Output: 'hi'

// Input: ['flower', 'juniper', 'lily', 'dandelion']
// Output: 'lily'

