import { ethers, getAddress, keccak256, parseEther, solidityPacked, solidityPackedKeccak256, Wallet } from "ethers";
import { MemeA8__factory, MemeA8Factory__factory } from "./contracts";
import { A8_FACTORY_ADDRESS, A8_TOKEN_ADDRESS, PROVIDER } from "./config";

export namespace MemeA8 {
    export async function buy(
        wallet: Wallet,
        token: string,
        amountIn: bigint,
        minAmountOut: bigint
    ) {
        const sc = MemeA8__factory.connect(token, wallet);
        // const tx = await sc.swapExactIn(
        //     amountIn,
        //     minAmountOut,
        //     true,
        //     wallet.address,
        //     {
        //         value: amountIn
        //     }
        // )
        // await tx.wait();
        // console.log(tx.hash)
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

    export async function whitelistBuyExactOut(
        wallet: Wallet,
        token: string,
        amountOut: bigint,
        maximumPay: bigint,
        id: bigint,
        tokenAllocation: bigint,
        expiredBlockNumber: bigint,
        signature: string
    ) {
        
        const sc = MemeA8__factory.connect(token, wallet);
        // const approvalTx = await MemeA8__factory.connect(A8_TOKEN_ADDRESS, wallet).approve(token, parseEther('10000'));
        // await approvalTx.wait();
        // console.log(approvalTx.hash);
        const tx = await sc.whitelistBuyExactOut(
            amountOut,
            maximumPay,
            true,
            wallet.address,
            id,
            tokenAllocation,
            expiredBlockNumber,
            signature
        )
        await tx.wait();
        console.log(tx.hash);
    }

    export async function createMeme(
        wallet: Wallet,
        name: string,
        symbol: string,
        tokenId: bigint
    ) {
        const sc = MemeA8Factory__factory.connect(A8_FACTORY_ADDRESS, wallet);
        const totalSupply = parseEther(1e9.toString());
        const saleAmount = parseEther(8e8.toString());

        const tokenOffset = parseEther(266666666.6666667.toString());
        const nativeOffset = parseEther(1.6666666666666667.toString());
        const initialBuy = parseEther(0.015.toString());

        const blockTs = (await PROVIDER.getBlock("latest"))!.timestamp;
        const tx = await sc.createMeme(
            name,
            symbol,
            tokenId,
            tokenOffset,
            nativeOffset,
            totalSupply,
            saleAmount,
            initialBuy,
            blockTs + 3600 * 12
        );
        await tx.wait();
        console.log(tx.hash);
    }
}