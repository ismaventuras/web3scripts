# WEB3 SCRIPTS

A repository where i save the scripts i've coded or forked, if you came across this repo i hope it's usefull for you.

## install dependencies

run npm install or yarn add

- ethers

## list of current scripts

### utils/createWallet

An script to create a desired amount of wallets, if no parameter is passed it creates one by default

Usage

```powershell
node createWallet.js 2

[
  {
    mnemonic: 'seed pharse',       
    address: '0xpublickey'
  },
  {
    mnemonic: 'seed pharse',       
    address: '0xpublickey'
  },
]
```

### deployContract

Deploy a contract using ethers

Usage

- Fill info in secrets_sample.json and rename it to secrets.json

```powershell
node deployContract\deployContract.js 
```
