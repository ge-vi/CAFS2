const os = require('node:os');

const cpu = os.cpus();
console.log(`Your computer use "${cpu[0]?.model}" with ${cpu.length} cores`);


