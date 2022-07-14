/**
 * Parašykite NodeJS programą, kuri iš komandinės eilutės priims 2 parametrus:
 * 1) failo pavadinimas
 * 2) failo turinys
 *
 * O tada sukur tokį failą ir įdės ten turinį.
 *
 * P.S.
 * https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
 */

const fs = require('node:fs');

const fileName = String(process.argv[2]);
const fileContents = String(process.argv[3]);

if (!fileName && !fileContents) {
  console.log("Missing arguments. please specify file name and file contents.");
}

fs.writeFile(`./${fileName}`, fileContents, err => {
  if (err) {
    console.error(err);
  }
  console.log("file written successfully");
});
