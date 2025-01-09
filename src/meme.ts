import { AbiCoder, BigNumberish, concat, ethers, keccak256 } from "ethers";
import { creationCode, factory } from "./contract-config.json";

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
}