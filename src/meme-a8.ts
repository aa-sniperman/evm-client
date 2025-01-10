import { Wallet } from "ethers";
import { MemeA8__factory } from "./contracts";

export namespace MemeA8 {
    export async function buy(
        wallet: Wallet,
        token: string,
        amountIn: bigint,
        minAmountOut: bigint
    ) {
        const sc = MemeA8__factory.connect(token, wallet);
        const tx = await sc.swapExactIn(
            amountIn,
            minAmountOut,
            true,
            wallet.address,
            {
                value: amountIn
            }
        )
        await tx.wait();
        console.log(tx.hash)
    }

    export async function sell(
        wallet: Wallet,
        token: string,
        amountIn: bigint,
        minAmountOut: bigint
    ) {
        const sc = MemeA8__factory.connect(token, wallet);
        const tx = await sc.swapExactIn(
            amountIn,
            minAmountOut,
            false,
            wallet.address,
        )
        await tx.wait();
        console.log(tx.hash)
    }
}