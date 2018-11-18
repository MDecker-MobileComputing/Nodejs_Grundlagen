#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

const buchObjekt = { titel  : "Großes Buch der Allwissenheit",
                     autoren: [ "Alice Mayer", "Bob Brown" ],
                     jahr   : 2001
                   };

buchObjekt.erstauflage = true;

console.log("\nBuchtitel: " + buchObjekt.titel );

console.log("\nAutoren:");
for (let i = 0; i < buchObjekt.autoren.length; i++) {
  console.log("\t" + buchObjekt.autoren[i]);
}

if (buchObjekt.erstauflage) {
  console.log("\nDas Buch ist eine Erstauflage.\n");
} else {
  console.log("\nDas Buch ist KEINE Erstauflage.\n");
}

