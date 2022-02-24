// Import the coinFlip and flipACoin function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs').argv;


// Define allowed argument name 'call'.

// Call the coinFlip function and put the return into STDOUT

// Call the coinFlip function and put the return into STDOUT
console.log(flipACoin(args.call));
if(args.length == 0){
    System.err.println("Error: no input.");
}