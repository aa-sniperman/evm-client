import { AbiCoder, BigNumberish, concat, ethers, keccak256, parseEther, Wallet } from "ethers";
import { creationCode, factory } from "./contract-config.json";
import { Meme__factory, MemeFactory__factory } from "./contracts";
import { FACTORY_ADDRESS, PROVIDER } from "./config";

export namespace Meme {


    /**
 * Computes the CREATE2 address for a contract deployed with a given token ID.
 * 
 * @param tokenId - The unique token ID.
 * @param deployer - The address of the contract deployer.
 * @returns The computed contract address.
 */
    export function computeMemeAddress(
        tokenId: BigNumberish,
    ): string {
        // Compute the salt from the tokenId
        const salt = keccak256(AbiCoder.defaultAbiCoder().encode(["uint256"], [tokenId]));

        // Compute the hash of the creation code
        const bytecodeHash = keccak256(creationCode);

        // Compute the CREATE2 address
        const prefix = "0xff"; // Required prefix for CREATE2
        const dataToHash = concat([prefix, ethers.zeroPadValue(factory, 20), salt, bytecodeHash]);

        // Hash the concatenated data and take the last 20 bytes for the address
        const hash = keccak256(dataToHash);
        return `0x${hash.slice(-40)}`;
    }

    export async function getMemeInfo(token: string) {
        const sc = Meme__factory.connect(token, PROVIDER);
        const reserve = await sc.reserveToken();
        console.log(reserve);
        const symbol = await sc.symbol();
        console.log(symbol);
    }

    export async function createMeme(
        name: string,
        symbol: string,
        tokenId: number
    ) {

        const totalSupply = parseEther(1e9.toString());
        const saleAmount = parseEther(8e8.toString());

        const tokenOffset = parseEther(266666666.6666667.toString());
        const nativeOffset = parseEther(1.6666666666666667.toString());
        const creationFee = parseEther(0.0001.toString())
        const initialBuy = parseEther(0.01.toString());

        const pk = process.env.PK as string;
        const wallet = new Wallet(pk, PROVIDER);
        const factory = MemeFactory__factory.connect(FACTORY_ADDRESS, wallet);
        const tx = await factory.createMeme(
            name,
            symbol,
            tokenId,
            tokenOffset,
            nativeOffset,
            totalSupply,
            saleAmount,
            {value: creationFee + initialBuy}
        )
        await tx.wait();
        console.log(tx.hash);
    }
}