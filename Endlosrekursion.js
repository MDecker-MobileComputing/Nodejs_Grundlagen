#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


 function meineFunktion(zahl) {

    zahl++;

    if (zahl % 100 == 0) { console.log(`zahl=${zahl}`); }

    return meineFunktion( zahl );
 }


 meineFunktion( 0 );
