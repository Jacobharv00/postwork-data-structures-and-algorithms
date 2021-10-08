function reverseString ( str ) {
  let reversed = ''

  for ( const letter of str ) {
    reversed = letter + reversed
  }
  return reversed
}

// need to look at every character in the string and add it back in 
// need to make it so when a argument of a string is givin it takes that string & reverses it.

if ( require.main === module ) {
  // add your own tests in here
  console.log( "Expecting: 'ih'" )
  console.log( "=>", reverseString( "hi" ) )

  console.log( "" )

  console.log( "Expecting: 'ybabtac'" )
  console.log( "=>", reverseString( "catbaby" ) )

  console.log( 'Without function call', 'Jacob' )
  console.log( 'With function call', reverseString( 'Jacob' ) )

  console.log( 'Without function call', 'Natasha' )
  console.log( 'With function call', reverseString( 'Natasha' ) )


}

module.exports = reverseString

