
const bookObject = {
                     title  : "Great Book of Omniscience",
                     authors: [ "Alice Mayer", "Bob Brown" ],
                     year   : 2001
                   };

bookObject.firstEdition = true;

console.log( "\nBook title: " + bookObject.title );

console.log( "\nAuthors:" );
for ( let i = 0; i < bookObject.authors.length; i++ ) {

  console.log( "\t" + bookObject.authors[i] );
}


if ( bookObject.firstEdition ) {

  console.log( "\nThe book is a first edition.\n" );

} else {

  console.log( "\nThe book is NOT a first edition.\n" );
}
