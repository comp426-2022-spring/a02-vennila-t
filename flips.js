// Import the coinFlip function from your coin.mjs file
import { coinFlips } from "./modules/coin.mjs";
import {countFlips} from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs').argv;

// Define allowed argument name 'number'.
// Call the coinFlip function and put the return into STDOUT
var result = new Array();
switch (args) {
    case 'number':
      result = coinFlips(args.number);
      break;
    default:
        result = coinFlips(1);
}
console.log(result);
console.log(countFlips(result));