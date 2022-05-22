# createWallet

An script to create a desired amount of wallets, if no parameter is passed it creates one by default

## Requirements

- etherjs

```bash
> npm install etherjs 
#or
> yarn add etherjs
```

## Usage

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