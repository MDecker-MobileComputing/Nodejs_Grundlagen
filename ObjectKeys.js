
console.log();

const einObjekt = {
                     "a": "Lorem Ipsum",
                     "bc": 123,
                     "xyz": true
                  };

const alleObjektKeysArray = Object.keys(einObjekt);

alleObjektKeysArray.forEach( s => {   
    console.log( "Key in Objekt gefunden: " + s );   
});    

console.log();