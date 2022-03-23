// Import the coinFlip function from your coin.mjs file
import { coinFlips } from "./modules/coin.mjs";
import {countFlips} from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


// Define allowed argument name 'number'.
// Call the coinFlip function and put the return into STDOUT
var result = new Array();
const argv = require('yargs')
  .default('random', function randomValue() {
    result = coinFlips(1);
  }).argv;

if (argv.number) {
  result = coinFlips(argv.number);
}

console.log(result);
console.log(countFlips(result));