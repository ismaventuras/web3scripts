const ethers = require('ethers') // we will use ethers for all blockchain related functions

const { RPC_URLS, privateKey, CONTRACT_ABI, CONTRACT_BYTECODE } = require('./secrets.json')

/**
 * 
 * @param {ethers.ContractInterface} ABI contract's interface (get from remix, etherscan or truffle)
 * @param {ethers.BytesLike} bytecode  contract's compiled code (get from remix)
 * @param {ethers.Signer} signer  
 * @param {Array} args constructor arguments
 */
const deployContract = async (ABI, bytecode, signer, args = []) => {
    let factory = new ethers.ContractFactory(ABI, bytecode, signer)
    const deployedContract = await factory.deploy(...args)
    console.log("Transaction sent to miners, contract address:", deployedContract.address)
    let receipt = await deployedContract.deployed()
    return receipt.deployTransaction
}


//Main
const provider = new ethers.providers.JsonRpcProvider(RPC_URLS.rinkeby)
const wallet = new ethers.Wallet(privateKey) // load the private key 
const signer = wallet.connect(provider) // connect your wallet to the RPC to sign transactions

deployContract(CONTRACT_ABI, CONTRACT_BYTECODE, signer, ['arg1', 'arg2'])
    .then((deployTransaction) => {
        console.log('tx mined', deployTransaction)
    })
    .catch(error => {
        console.log('deployContract failed:', error)
    })
