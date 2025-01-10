import { Meme } from "./meme";
import dotenv from "dotenv";
import { SingletonFactory } from "./singleton-factory";
import { MemeA8 } from "./meme-a8";
import { parseEther, Wallet } from "ethers";
import { A8_PROVIDER, PROVIDER } from "./config";
import { MemeA8__factory } from "./contracts";
dotenv.config();

async function main() {
    const pk = process.env.PK as string;
    const wallet = new Wallet(pk, A8_PROVIDER);
    const token = '0x7857AF3f65Eb3c4f744C5a50C4E9dCc516510c9c'
    // await MemeA8.buy(
    //     wallet,
    //     token,
    //     parseEther('1'),
    //     parseEther('59100000')
    // )

    const sc = MemeA8__factory.connect(token, A8_PROVIDER);
    const balance = await sc.balanceOf(wallet.address);
    console.log(balance);
    const quote = await sc.quoteAmountOut(
        balance,
        false
    )
    console.log(quote);
    await MemeA8.sell(
        wallet,
        token,
        balance,
        quote.amountOut
    )

}

main();