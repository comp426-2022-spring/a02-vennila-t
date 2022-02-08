// Import the coinFlip function from your coin.mjs file
function coinFlip() {
    var coin = ['heads', 'tails'];
    return coin[Math.floor(Math.random()*coin.length)];
}
// Call the coinFlip function and put the return into STDOUT
console.log(coinFlip())