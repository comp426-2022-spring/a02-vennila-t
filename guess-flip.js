// Import the coinFlip and flipACoin function from your coin.mjs file

import {flipACoin} from "./modules/coin.mjs";


import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var result = new Array();
// switch (args) {
//   // Define allowed argument name 'call'.
//     case 'call':
//       // Call the coinFlip function and put the return into STDOUT
//       result = flipACoin(args.call);
//       break;
//     default:
//       result = ("Error: no input.");
// }
// console.log(result);

const argv = require('yargs')
  .default('random', function randomValue() {
    result = "Error: no input";
  }).argv;

if (argv.call) {
  result = flipACoin(argv.call);
}

console.log(result);