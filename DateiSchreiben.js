#!/usr/bin/env node

/* 
 * Modul "fs" (Filesystem) laden.
 * Dokumentation zu diesem Modul: https://nodejs.org/api/fs.html
 * 
 * Achtung: 
 * Die "require()"-Funktion ist Node.js-spezifisch, kann also nicht
 * in einer JavaScript-Datei für einen Web-Browser verwendet werden.
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */ 
const fs = require("fs");


const datum = new Date();
const textZuSchreiben = "Aktueller Zeitpunkt: " + datum;

fs.writeFileSync("NeueDatei.txt", textZuSchreiben);
// Doku zu dieser Methode: https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// Der Text wird -- wenn keine weitere Optionen angegeben sind -- mit der Kodierung "UTF8"
// geschrieben.

console.log("\nTextdatei wurde erstellt.\n");
