const { type, cpus, totalmem } = require('node:os');
const express = require('express');

/**
 * Naudojant http://expressjs.com router'į sukurkite 3 endpoint'us:
 *
 * /os rodo informaciją apie operacinę sistemą
 * /cpu rodo informaciją apie processorius
 * /ram rodo informaciją apie atmintį
 */

const app = express();
const port = 3000;

// https://stackoverflow.com/a/18650828/2948417
function bytesToSize(bytes, decimals) {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

app.get('/', (req, res) => {
  res.send(`/os rodo informaciją apie operacinę sistemą<br>
/cpu rodo informaciją apie processorius<br>
/ram rodo informaciją apie atmintį`);
});

app.get('/os', (req, res) => {
  res.send(`Computer operating system is: ${type()}`);
});

app.get('/cpu', (req, res) => {
  const cpu = cpus();
  res.send(`Computer use "${cpu[0]?.model}" with ${cpu.length} cores`);
});

app.get('/ram', (req, res) => {
  res.send(`Computer have ${bytesToSize(totalmem())} RAM`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
