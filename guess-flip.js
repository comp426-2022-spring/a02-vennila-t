// Import the coinFlip and flipACoin function from your coin.mjs file

import {flipACoin} from "./modules/coin.mjs";


import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const argv = require('yargs')
  .default('random', function randomValue() {
    console.log("Error: no input");
    console.log("Usage: node guess-flip --call=[heads|tails]");
  }).argv;

if (argv.call == "heads" || argv.call == "tails") {
  console.log(flipACoin(argv.call));
}