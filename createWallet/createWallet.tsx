const ethers = require('ethers')
const args = process.argv.slice(2) // get args from console

// set the first argument as the amount of wallets the user wants to create, if no parameter passed only 1 account is created.
let amountByArg: number = parseInt(args[0])
let numOfWallets: number = args[0] ? amountByArg : 1 

if (isNaN(numOfWallets)){ // if first arg is not a number then stop
    console.error('first argument is not a number')
    process.exit(1)
}

type Wallet = {
    address: string;
    mnemonic: string;
}

function createWallet(amount){
    let listOfWallets:Wallet[] = []
    for (let index = 0; index < amount; index++) {
        const wallet = ethers.Wallet.createRandom()
        const new_wallet: Wallet = {
            address : wallet.address,
            mnemonic: wallet.mnemonic().phrase            
        }
        listOfWallets.push(new_wallet)
    }
    return listOfWallets
}

const wallets = createWallet(numOfWallets)
console.log(wallets)