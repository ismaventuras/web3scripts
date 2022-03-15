/**
 * Send a message using ethers
 * 
 * @typedef {string} to
 * @typedef {string} message
 * @typedef {ethers.Signer} from
 */
const ethers = require('ethers')
const {privateKey, RPC_URLS} = require('./secrets.json')

// Ethers config
const provider = new ethers.providers.JsonRpcProvider(RPC_URLS.rinkeby)
const wallet = new ethers.Wallet(privateKey)
const signer = wallet.connect(provider)

/**
 * function args
 */
let from = signer.address
let to = 'DESTINATION ADDRESS'
let message = 'MESSAGE TO SEND'

async function sendMessage(message, from, to) {

    let rawTx = {
        from,
        to,
        nonce: provider.getTransactionCount(from, "latest"),
        data: ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message)),
    }

    const tx = await signer.sendTransaction(rawTx)
    console.log(tx)
    const receipt = await tx.wait()
    console.log(receipt)
}


sendMessage(message = message, from = from, to = to)
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })
