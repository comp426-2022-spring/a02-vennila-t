// Import the coinFlip and flipACoin function from your coin.mjs file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs')(process.argv.slice(2));
const args = require('yargs').argv;


// Define allowed argument name 'call'.

// Call the coinFlip function and put the return into STDOUT

// Call the coinFlip function and put the return into STDOUT
switch (args) {
    case 'call':
      console.log(flipACoin(args.call));
      break;
    default:
        console.log("Error: no input.");
}