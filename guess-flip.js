// Import the coinFlip and flipACoin function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs').argv;


// Define allowed argument name 'call'.

switch (args) {
    case 'call':
      console.log(flipACoin(args.call));
      break;
    default:
        "Error: no input.";
}