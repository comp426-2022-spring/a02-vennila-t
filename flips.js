// Import the coinFlip function from your coin.mjs file
import {coinFlips} from "./modules/coin.mjs";
import {countFlips} from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('yargs').argv;


// Define allowed argument name 'number'.
// Call the coinFlip function and put the return into STDOUT

if(args.length == 0){
    console.log(coinFlips(1));
}
else{
    console.log(coinFlips(args.number));
}
console.log(countFlips(coinFlips(args.number)));