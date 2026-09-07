
/*
 * Modul "fs" (Filesystem) laden.
 * Dokumentation zu diesem Modul: https://nodejs.org/api/fs.html
 */
import fs from "fs";


const datum           = new Date();
const textZuSchreiben = "Aktueller Zeitpunkt: " + datum;

fs.writeFileSync( "ZZ_DatumUndZeit.txt", textZuSchreiben );
// Doku zu dieser Methode: https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// Der Text wird -- wenn keine weitere Optionen angegeben sind -- mit der Kodierung "UTF8"
// geschrieben.

console.log( "\nTextdatei wurde erstellt.\n" );
