// Import the coinFlip function from your coin.mjs file
import {coinFlips} from "./modules/coin.mjs";
const args = require('minimist')(process.argv.slice(2))
// Define allowed argument name 'number'.
args["number"]
// Call the coinFlip function and put the return into STDOUT
console.log(coinFlips(args));