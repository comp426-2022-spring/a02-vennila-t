// Import the coinFlip and flipACoin function from your coin.mjs file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs').argv;

var result = new Array();
switch (args) {
  // Define allowed argument name 'call'.
    case 'call':
      // Call the coinFlip function and put the return into STDOUT
      result = flipACoin(args.call);
      break;
    default:
      result = ("Error: no input.");
}
console.log(result);