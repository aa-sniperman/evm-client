import { ethers, getAddress, keccak256, solidityPacked, solidityPackedKeccak256, Wallet } from "ethers";
import { MemeA8__factory } from "./contracts";
import { PROVIDER } from "./config";

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

    export interface WhitelistPayloadData {
        id: bigint,
        tokenAddress: string,
        walletAddress: string,
        tokenAllocation: bigint,
        expiredBlockNumber: bigint
    }
    export async function signWhitelist(
        {
            id,
            tokenAddress,
            walletAddress,
            tokenAllocation,
            expiredBlockNumber
        }: WhitelistPayloadData
    ) {
        const pk = process.env.SIGNER_PK as string;
        const adminWallet = new Wallet(pk, PROVIDER);
        console.log(adminWallet.address);

        const msgHash = keccak256(solidityPacked(
            [
                'uint256',
                'address',
                'address',
                'uint256',
                'uint256'
            ],
            [
                id,
                getAddress(tokenAddress),
                getAddress(walletAddress),
                tokenAllocation,
                expiredBlockNumber
            ],
        ));

        console.log(msgHash);

        const signature = await adminWallet.signMessage(ethers.getBytes(msgHash));

        return signature;

    }
}