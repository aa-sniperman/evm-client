import { A8_PROVIDER } from "./config"
import data from "./a8-meme-factory-config.json";
import { SingletonFactory__factory } from "./contracts";
import { Wallet } from "ethers";

export namespace SingletonFactory {
    export async function deploySingletonFactory() {
        const rawTx = '0xf9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b83247000822470'
        const res = await A8_PROVIDER.broadcastTransaction(rawTx);
        console.log(res);
    }

    export async function deployMemeFactory(wallet: Wallet) {
        const salt = "0x8f6b23ffa15f0465e3176e15ca644cf24f86dc1312fe715484e3c4aead5eb78b";
        // const owner = data.owner;
        const initCode = data.creationCode;
        const deployer = SingletonFactory__factory.connect("0xce0042B868300000d44A59004Da54A005ffdcf9f", wallet);
        const tx = await deployer.deploy(initCode, salt);
        await tx.wait();
        console.log(tx.hash);
    }
}