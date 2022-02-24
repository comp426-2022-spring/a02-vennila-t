// Import the coinFlip function from your coin.mjs file
import {coinFlips} from "./modules/coin.mjs";

const args = require("yargs");

// Define allowed argument name 'number'.

// Call the coinFlip function and put the return into STDOUT
console.log(coinFlips(args.number));