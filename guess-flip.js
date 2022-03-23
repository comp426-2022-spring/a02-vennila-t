// Import the coinFlip and flipACoin function from your coin.mjs file

import {flipACoin} from "./modules/coin.mjs";


import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var result = new Array();

const argv = require('yargs')
  .default('random', function randomValue() {
    result = "Error: no input";
  }).argv;

if (argv.call == "heads" || argv.call == "tails") {
  result = flipACoin(argv.call);
}

console.log(result);