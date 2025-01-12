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
    //     parseEther('0.1'),
    //     parseEther('100000')
    // )

    // const sc = MemeA8__factory.connect(token, A8_PROVIDER);
    // const balance = await sc.balanceOf(wallet.address);
    // console.log(balance);
    // const quote = await sc.quoteAmountOut(
    //     balance,
    //     false
    // )
    // console.log(quote);
    // await MemeA8.sell(
    //     wallet,
    //     token,
    //     697236163724775350707340388n,
    //     0n
    // )

    // await SingletonFactory.deployMemeFactory(wallet);
    const signature = await MemeA8.signWhitelist(
        {
            id: 1n,
            tokenAddress: '0xE3edE24C425176836F430Ab83bb7643A38133E83',
            walletAddress: '0x0000000000000000000000000000000000000374',
            tokenAllocation: parseEther(1e8.toString()),
            expiredBlockNumber: parseEther(1e16.toString())
        }
    )
    console.log(signature);
}

main();