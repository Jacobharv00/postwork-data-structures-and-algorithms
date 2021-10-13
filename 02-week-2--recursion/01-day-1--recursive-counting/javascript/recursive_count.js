function recursiveCount ( num = 0 ) {
  if ( num >= 10 ) return

  console.log( num )
  console.log( num + 1 )
  console.log( num + 2 )
  console.log( num + 3 )
  console.log( num + 4 )


  recursiveCount( ++num )

}


if ( require.main === module ) {
  recursiveCount()
}

module.exports = recursiveCount





//  sudo

// convert while loop to a recursive function that counts up by one.
// recursive function success if it prints numbers 0-9

// I need to set a base case if num >= 10 return 'done'
// call function inside itself that increments num + 1 each call till it reaches base case.





