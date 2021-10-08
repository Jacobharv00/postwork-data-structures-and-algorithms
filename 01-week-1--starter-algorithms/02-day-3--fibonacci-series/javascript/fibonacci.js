// Using terany operator
function fibonacci ( n ) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci( n - 1 ) + fibonacci( n - 2 )
}

// Using if else statement
// function fibonacci ( num ) {
//   if ( num <= 1 ) {
//     return num
//   } else {
//     return fibonacci( num - 1 ) + fibonacci( num - 2 )
//   }
// }



if ( require.main === module ) {
  // add your own tests in here
  console.log( "Expecting: 0" )
  console.log( "=>", fibonacci( 0 ) )

  console.log( "" )

  console.log( "Expecting: 1" )
  console.log( "=>", fibonacci( 2 ) )

  console.log( "" )

  console.log( "Expecting: 55" )
  console.log( "=>", fibonacci( 10 ) )
}

module.exports = fibonacci


