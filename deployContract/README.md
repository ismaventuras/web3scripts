# deployContract

Deploy a contract using ethers

## Requirements

- etherjs
- info required to deploy the contract
  - RPC_URL
  - CONTRACT ABI
  - CONTRACT BYTCODE
  
```bash
> npm install etherjs 
#or
> yarn add etherjs
```

## Usage

- Fill info in secrets_sample.json and rename it to secrets.json

```powershell
node deployContract\deployContract.js 
```
