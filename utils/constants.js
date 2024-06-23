import { createThirdwebClient, defineChain, getContract } from "thirdweb";

export const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
})

export const chain = defineChain(2442)

const contractAddress = '0xeC58fC513F3f5F444d7CC7527Bf913EaC70CF83B'

const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "ticker",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "initalSupply",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalSupply",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenDeploymentAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "deployer",
                "type": "address"
            }
        ],
        "name": "TokenDeployed",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_ticker",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_initalSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalSupply",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "deployToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "getTokenByAddress",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "ticker",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "initalSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenDeploymentAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "internalType": "struct ERC20TokenFactory.Token",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getTokensByUser",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "ticker",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "initalSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenDeploymentAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "internalType": "struct ERC20TokenFactory.Token[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tokens",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "ticker",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "initalSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalSupply",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "tokenDeploymentAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const CONTRACT = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI
})