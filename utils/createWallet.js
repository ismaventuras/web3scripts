const ethers = require('ethers')
const args = process.argv.slice(2) // get args from console

// set the first argument as the amount of wallets the user wants to create, if no parameter passed only 1 account is created.
let numOfWallets = args[0] ? args[0] : 1 

if (isNaN(numOfWallets)){ // if first arg is not a number then stop
    console.error('first argument is not a number')
    process.exit(1)
}


function createWallet(amount){
    listOfWallets = []
    for (let index = 0; index < amount; index++) {
        const wallet = ethers.Wallet.createRandom()
        listOfWallets.push({mnemonic:wallet._mnemonic().phrase,address:wallet.address})
    }
    return listOfWallets
}

const wallets = createWallet(numOfWallets)
console.log(wallets)