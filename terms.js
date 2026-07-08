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
    
    x402: "An HTTP payment standard that enables instant micropayments for APIs and online services. When a server requires payment, it returns a 402 status and the client pays automatically before receiving the response."
};

module.exports = terms;
