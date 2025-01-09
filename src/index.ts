import { Meme } from "./meme";

function main() {
    const address = Meme.computeMemeAddress(1)
    console.log(address);
}

main();