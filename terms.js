const terms = {
    blockchain: "A shared public ledger that records every transaction ever made. No single person owns it. Everyone keeps a copy and all copies must agree before anything is recorded as true.",
    
    wallet: "A tool that stores the keys giving you access to your crypto. It does not store coins — it stores your proof of ownership.",
    
    gas: "A small fee paid to the network every time you do something on the blockchain. It compensates the computers that process your transaction.",
    
    nonce: "A number that miners increment when searching for a valid block hash. Also used in transactions to prevent the same transaction from being submitted twice.",
    
    smartcontract: "A self-executing agreement written in code that runs automatically when conditions are met. No lawyers or middlemen required.",
    
    defi: "Decentralised Finance. Financial services like lending, borrowing and trading built on blockchain without banks or institutions.",
    
    nft: "Non-Fungible Token. A unique digital asset recorded on the blockchain. Unlike Bitcoin, each one is one of a kind and cannot be exchanged equally for another.",
    
    consensus: "The process by which all computers on a blockchain network agree on the same version of transaction history.",
    
    mining: "The process of solving complex mathematical puzzles to validate transactions and add new blocks to the blockchain. Miners are rewarded with newly created crypto.",
    
    hash: "A fixed-length string of characters produced by running data through a mathematical function. The same input always produces the same hash. Change anything and the hash changes completely.",
    
    block: "A group of transactions bundled together and added to the blockchain after being verified by the network.",
    
    node: "A computer that participates in the blockchain network by keeping a copy of the entire transaction history and helping validate new transactions.",
    
    privatekey: "A secret code that proves you own your wallet and authorises transactions. Losing it means losing access to your funds permanently.",
    
    publickey: "A code derived from your private key that acts as your wallet address. You share this with others so they can send you funds.",
    
    stablecoin: "A cryptocurrency designed to maintain a stable value by being pegged to a real-world asset like the US dollar. Examples: cUSD, USDC, USDT.",
    
    cusd: "Celo Dollar. A stablecoin on the Celo network pegged to the US dollar. Used for fast, low-cost payments especially across Africa.",
    
    layer2: "A secondary network built on top of a main blockchain to make transactions faster and cheaper while inheriting the security of the main chain.",
    
    dapp: "Decentralised Application. An app that runs on a blockchain instead of a central server. No single company controls it.",
    
    seedphrase: "Twelve or twenty-four words that act as the master key to your wallet. Anyone with these words owns your wallet completely.",
    
    x402: "An HTTP payment standard that enables instant micropayments for APIs and online services. When a server requires payment, it returns a 402 status and the client pays automatically before receiving the response.",

    dapp: "Decentralised Application. An app that runs on a blockchain instead of a central server. No single company controls it.",

    dao: "Decentralised Autonomous Organisation. A group governed by rules encoded in smart contracts instead of a traditional management structure. Members vote on decisions using tokens.",

    token: "A digital asset created on an existing blockchain. Unlike coins which are native to a blockchain, tokens are built on top of one. Example: USDC is a token built on Ethereum and Celo.",

    coin: "A cryptocurrency that is native to its own blockchain. CELO is the native coin of the Celo network. Bitcoin is the native coin of the Bitcoin network.",

    consensus: "The process by which all computers on a blockchain network agree on the same version of transaction history.",

    proofofstake: "An alternative to Proof-of-Work where validators lock up crypto as collateral to earn the right to validate transactions. Uses far less energy than mining.",

    validator: "A computer on a Proof-of-Stake network that is responsible for verifying transactions and adding new blocks. Validators stake tokens as a guarantee of honest behaviour.",

    bridge: "A tool that moves crypto assets between two different blockchains. For example, moving USDC from Ethereum to Celo.",

    liquidity: "The availability of assets in a market or protocol. High liquidity means assets can be bought or sold quickly without significantly affecting the price.",

    yield: "The return earned on crypto assets, usually expressed as an annual percentage. Similar to interest earned in a savings account but in DeFi protocols.",

    swap: "Exchanging one cryptocurrency directly for another without converting to traditional currency first. Done instantly on decentralised exchanges.",

    dex: "Decentralised Exchange. A platform where users trade cryptocurrencies directly with each other via smart contracts. No company controls it. Examples: Uniswap, Ubeswap on Celo.",

    cex: "Centralised Exchange. A company-run platform where you trade crypto. They hold your funds on your behalf. Examples: Binance, Coinbase, Yellow Card.",

    airdrop: "Free tokens distributed to wallet addresses, usually as a reward for early adoption or community participation.",

    mint: "The process of creating a new token or NFT on a blockchain. When you mint an NFT you are recording your ownership of a unique digital asset on-chain.",

    burn: "Permanently removing tokens from circulation by sending them to an address nobody controls. Used to reduce supply and sometimes increase value.",

    gasLimit: "The maximum amount of gas a user is willing to spend on a transaction. If a transaction requires more gas than the limit, it fails.",

    mempool: "A waiting room for unconfirmed transactions. When you send crypto it sits in the mempool until a miner or validator picks it up and adds it to a block.",

    whitepaper: "A technical document published by a blockchain project explaining its purpose, technology, and how it works. Bitcoin's whitepaper was published by Satoshi Nakamoto in 2008.",

    celo: "An Ethereum Layer 2 blockchain built for fast, low-cost payments with a focus on mobile users and financial inclusion in emerging markets, particularly Africa."

};

module.exports = terms;
