#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


 function meineFunktion(zahl) {

    zahl++;
    console.log(`zahl=${zahl}`);

    if (zahl > 0) { return meineFunktion( zahl ); }
    else { return zahl; }
 }


 meineFunktion( 0 );
