import { Meme } from "./meme";
import dotenv from "dotenv";
import { SingletonFactory } from "./singleton-factory";
import { MemeA8 } from "./meme-a8";
import { getAddress, parseEther, Wallet } from "ethers";
import { A8_PROVIDER, PROVIDER } from "./config";
import { MemeA8__factory } from "./contracts";
dotenv.config();

async function main() {
    const pk = process.env.PK as string;
    const wallet = new Wallet(pk, A8_PROVIDER);
    // const token = '0x7b845bCD2929a601832246c9A6354484245D3bCf'
    // const data = await Meme.getMemeInfo(token);
    // console.log(data);
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
    // const signature = await MemeA8.signWhitelist(
    //     {
    //         id: 1n,
    //         tokenAddress: '0x08781Fa607428Ae148c08a052751669b7BBBD3c6',
    //         walletAddress: '0x0000000000000000000000000000000000000374',
    //         tokenAllocation: parseEther(1e8.toString()),
    //         expiredBlockNumber: parseEther(1e16.toString())
    //     }
    // )
    // console.log(signature);
    // await MemeA8.createMeme(
    //     wallet,
    //     "Pump Bee",
    //     "PBEE",
    //     3n
    // )
    const payload = {
        "id": "1736759168274167329803000589743120391122826344532102",
        "status": "pending",
        "tokenAddress": "0x44A7edAD62Fc56f775e74eD43aAaDAbE5F4f8Ba4",
        "walletAddress": "0xEB5491C015b73C3B86F4B4a7E8982d97eC4628ff",
        "remainingAmountAllocation": "100000000000000000000000000",
        "expiredBlockNumber": 16501037,
        "signature": "0xd1836bfe9664c85a8a0862f25e76fe530863e44b23058593d567883f2a5b9f3f73e3971dc9c0948b606d26e23090b2d466e0eefba7c8d5943f7f53686dd5a1d21b",
        "createdTime": 1736759168,
        "tokenAmount": null,
        "created_at": "2025-01-13T02:06:08.455Z",
        "updated_at": "2025-01-13T02:06:08.455Z"
    }
    console.log(wallet.address)
    await MemeA8.whitelistBuyExactOut(
        wallet,
        getAddress(payload.tokenAddress),
        BigInt(payload.remainingAmountAllocation),
        parseEther('5'),
        BigInt(payload.id),
        BigInt(payload.remainingAmountAllocation),
        BigInt(payload.expiredBlockNumber),
        payload.signature
    )
}

main();