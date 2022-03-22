// Import the coinFlip and flipACoin function from your coin.mjs file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs')(process.argv.slice(2));

switch (args) {
  // Define allowed argument name 'call'.
    case 'call':
      // Call the coinFlip function and put the return into STDOUT
      console.log(flipACoin(args.call));
      break;
    default:
        console.log("Error: no input.");
}