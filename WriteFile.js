
/*
 * Load the "fs" module (filesystem).
 * Documentation for this module: https://nodejs.org/api/fs.html
 */
import fs from "fs";

const date        = new Date();
const textToWrite = "Current time: " + date;

fs.writeFileSync( "ZZ_DateAndTime.txt", textToWrite );
// Documentation for this method: https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// The text is written using the "UTF8" encoding when no additional options are specified.

console.log( "\nText file was created.\n" );
