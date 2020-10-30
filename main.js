const os = require('os');
const fs = require('fs');

const EDGES = [100, 1];
const NUMBER_LENGTH = 4;
let TOTAL_STRING = '';

console.time();

try {
  const everyIsNumers = EDGES.every(i => typeof i === 'number');
  const everyIsPositive = EDGES.every(i => i > 0);

  if (EDGES.length !== 2) throw 'Not correct length of array';
  if (!everyIsNumers) throw 'Not a number';
  if (!everyIsPositive) throw 'Number must be positive';

  if (EDGES[0] < EDGES[1]) {
    for (let i = EDGES[0]; i < EDGES[1]; i++) {
      const value = `${i}`.padStart(NUMBER_LENGTH + 1, '0');
      TOTAL_STRING += value;
    }
  } else {
    for (let i = EDGES[0]; i > EDGES[1]; i--) {
      const value = `${i}\n`.padStart(NUMBER_LENGTH + 1, '0');
      TOTAL_STRING += value;
    }
  }
  fs.appendFileSync('list.txt', TOTAL_STRING);
} catch (error) {
  console.log('Error:', error);
}

console.timeEnd();
