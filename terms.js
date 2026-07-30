const terms = {
  blockchain: "Imagine a classroom where every student writes down every transaction in their own notebook. Nobody can erase anything because everyone else's notebook would expose the lie. That's a blockchain — a shared record nobody controls alone.",

  wallet: "Not actually a wallet. More like a keychain. Your crypto lives on the blockchain — your wallet just holds the key to prove it's yours. Lose the key, lose everything.",

  gas: "Think of it like a toll on a highway. Want to move your crypto from A to B? The network charges a small fee. No fee, no movement.",

  nonce: "A lottery ticket number a computer tries over and over — millions of times per second — until it finds the winning combination that unlocks the next block.",

  smartcontract: "A vending machine. You put in the right amount, press the right button, and the machine automatically gives you what was promised. No cashier, no negotiation, no middleman.",

  defi: "Banking without the bank. You can lend, borrow, earn interest, and trade — all through code running on a blockchain. Nobody can freeze your account or deny you access.",

  nft: "A certificate of authenticity on the blockchain. Like owning the original Mona Lisa in a world where anyone can print a copy — everyone can see it, but only you own the real one.",

  consensus: "A group of strangers agreeing on what happened without needing a referee. Like a town hall where everyone votes and the majority decision becomes the official record.",

  mining: "Solving a very hard puzzle to earn the right to add the next page to the shared notebook. The winner gets newly created crypto as a reward for doing the work.",

  hash: "A digital fingerprint. Put any document through a hash function and get a unique string of characters. Change even one letter of the original and the fingerprint changes completely.",

  block: "One page in the global notebook. Each page holds a batch of transactions, gets stamped with a unique code, and gets glued permanently to the previous page.",

  node: "A volunteer who keeps a full copy of the shared notebook and helps verify that new entries are honest. The more nodes, the harder it is to cheat.",

  privatekey: "The master password to your crypto. Anyone who has it owns everything in your wallet. Write it on paper, store it safely, and never share it with anyone — ever.",

  publickey: "Your crypto address — like a bank account number. Share it freely so people can send you funds. It reveals nothing about your private key.",

  stablecoin: "Crypto that doesn't go on a rollercoaster. It stays pegged to a real-world currency like the US dollar so you can hold value without worrying about price swings.",

  cusd: "The Celo Dollar. A stablecoin worth one US dollar, built for fast and cheap payments across Africa and emerging markets. Like M-Pesa but on the blockchain.",

  layer2: "A fast lane built on top of a highway. The main blockchain is the highway — sometimes slow and expensive. Layer 2 handles traffic faster and cheaper, then reports back to the main road.",

  dapp: "An app with no company running it. The rules are written in code on the blockchain, so nobody can shut it down, change the rules, or freeze your account.",

  seedphrase: "Twelve words that ARE your wallet. Not a password — the wallet itself. Write them down, hide them well, and never type them into any website. These words are everything.",

  x402: "A payment handshake built into the internet. A server says 'pay me first', your wallet pays instantly, and the server delivers what you asked for — all in one round trip.",

  dao: "A company run by its members through voting, with no CEO. Rules are written in code and decisions are made by whoever holds the governance tokens.",

  token: "A digital asset that runs on top of an existing blockchain. Like a casino chip — it has value inside the ecosystem but relies on the casino's infrastructure to exist.",

  coin: "The native currency of a blockchain. CELO is Celo's coin. Bitcoin is Bitcoin's coin. These are not built on top of another chain — they ARE the chain's currency.",

  proofofstake: "Instead of burning electricity to win the right to add blocks, you lock up your own crypto as a bet. Behave honestly and you earn rewards. Cheat and you lose your stake.",

  validator: "A trusted participant who locks up crypto as collateral and earns the right to verify transactions and add new blocks. Think of them as referees with skin in the game.",

  bridge: "A ferry between two blockchain islands. You load your tokens on one side, the ferry crosses, and equivalent tokens appear on the other side.",

  liquidity: "How easy it is to buy or sell something without moving the price. High liquidity means you can trade large amounts instantly. Low liquidity means even small trades move the market.",

  yield: "The interest your crypto earns while sitting in a DeFi protocol. Like putting money in a savings account — except the rates are often much higher and the risks are very different.",

  swap: "Trading one crypto for another instantly, like exchanging currency at an airport — except there is no booth, no human, and often no fee beyond gas.",

  dex: "A marketplace where buyers and sellers trade crypto directly with each other through smart contracts. No company holds your funds and no company can block your trade.",

  cex: "A traditional crypto exchange run by a company. Convenient and fast, but they hold your funds on your behalf. If they get hacked or go bankrupt, your money is at risk.",

  airdrop: "Free tokens dropped into your wallet, usually as a reward for being an early user or community member. Like a company handing out free shares to its loyal customers.",

  mint: "Creating a new token or NFT on the blockchain. When you mint an NFT, you are stamping your ownership permanently into the public record.",

  burn: "Sending tokens to an address nobody controls — effectively destroying them forever. Projects burn tokens to reduce supply, which can increase the value of what remains.",

  gaslimit: "The maximum you are willing to spend on a single transaction. If the transaction needs more than your limit, it fails and you still pay for the computation already done.",

  whitepaper: "The founding document of a blockchain project. Like a business plan and technical manual combined. Satoshi Nakamoto's Bitcoin whitepaper is only nine pages and changed the world.",

  protocol: "The rulebook that governs how a blockchain or DeFi platform operates. Think of it like the constitution of a country — everyone follows the same rules.",

  governance: "The voting system of a decentralised protocol. Hold governance tokens and you get a say in how the protocol evolves — like being a shareholder who actually gets to vote.",

  tokenomics: "The economics behind a crypto token — how many exist, how they are distributed, what they are used for, and what keeps them valuable. Good tokenomics builds sustainable projects.",

  apy: "Annual Percentage Yield. The real return on your investment after compounding is included. A DeFi protocol offering 20% APY means your deposit grows 20% over a year if rates hold.",

  apr: "Annual Percentage Rate. The simple interest you earn in a year without compounding. Usually lower than APY. When comparing DeFi opportunities, always check which one is being advertised.",

  collateral: "Something valuable you lock up as a guarantee when borrowing. In DeFi, you deposit crypto to borrow crypto. If your collateral drops too much in value, the protocol sells it automatically.",

  liquidation: "When your collateral gets automatically sold because its value fell too low to cover your loan. Like a bank repossessing your house — except it happens in seconds with no warning call.",

  oracle: "The messenger between the real world and the blockchain. Smart contracts cannot browse the internet, so oracles fetch real-world data — like price feeds — and bring it on-chain.",

  layer1: "The base layer blockchain itself. Ethereum and Celo are Layer 1 networks. Everything else — Layer 2 solutions, tokens, dApps — is built on top of them.",

  rollup: "A traffic management system for blockchains. Thousands of transactions get bundled together, compressed, and submitted to the main chain as one. Faster and cheaper for everyone.",

  multisig: "A joint bank account for crypto. Multiple people must sign off before funds move. Used by teams and organisations so no single person can run off with the money.",

  coldwallet: "A crypto wallet that has never touched the internet. Like keeping cash in a safe at home instead of in a bank. Harder to access but far safer from hackers.",

  hotwallet: "A crypto wallet connected to the internet, like MetaMask on your phone. Convenient for daily use but more vulnerable to theft than a cold wallet.",

  gasprice: "How much you are willing to pay per unit of computation. Offer more and your transaction jumps the queue. Offer less and you might wait a long time or get ignored.",

  blocktime: "How long it takes for a new block to be added to the chain. Bitcoin takes about 10 minutes. Celo takes about one second. Faster block times mean faster transactions.",

  finality: "The moment a transaction becomes permanent and irreversible. On Celo, this happens in seconds. On Bitcoin, most people consider six blocks — about an hour — to be truly final.",

  interoperability: "The ability of different blockchains to talk to each other. Like different phone networks being able to call each other instead of operating as isolated islands.",

  tvl: "Total Value Locked. The total amount of crypto sitting inside a DeFi protocol. A high TVL means people trust the protocol enough to park their money in it.",

  rug: "A scam where developers hype a project, collect investor money, and then disappear — taking everything with them. Short for rug pull, as in pulling the rug from under you.",

  dyor: "Do Your Own Research. The crypto community's reminder that nobody is responsible for your investment decisions but you. Verify everything before you put money in.",

  fud: "Fear, Uncertainty and Doubt. Negative rumours spread deliberately to make people panic and sell. If someone is shouting that a project is dying, ask who benefits from you selling.",

  fomo: "Fear Of Missing Out. The feeling that everyone else is getting rich and you are being left behind. FOMO has caused more bad investment decisions than almost anything else in crypto.",

  gwei: "A tiny unit of ETH used to measure gas prices. One gwei is one billionth of one ETH. When gas is expensive, fees are measured in hundreds of gwei.",

  erc20: "The standard template for creating fungible tokens on Ethereum and Celo. USDC, USDT, and most other tokens follow this standard — like products built to fit the same shelf.",

  erc721: "The standard for NFTs. Each token created under ERC-721 is unique and cannot be swapped equally for another — unlike ERC-20 tokens where one is the same as any other.",

  metamask: "The most popular crypto wallet, available as a browser extension and mobile app. It is the front door to most Web3 applications on Ethereum and Celo.",

  depin: "Decentralised Physical Infrastructure. Projects that pay people with crypto to build and maintain real-world infrastructure — like wireless networks, storage, or energy grids.",

  rwa: "Real World Assets. Taking physical things like property, bonds, or gold and putting them on the blockchain as tokens. Brings traditional finance into DeFi.",

  kyc: "Know Your Customer. The identity verification process centralised exchanges use before letting you trade. Like showing your passport at the bank, but online.",

  aml: "Anti-Money Laundering. Rules that prevent criminals from using crypto platforms to clean dirty money. Why exchanges ask where your funds came from.",

  refi: "Regenerative Finance. Using DeFi tools to fund environmental and social causes. Celo is one of the strongest ReFi ecosystems — the chain itself runs on renewable energy.",

  socialfi: "Social media meets DeFi. Platforms where your followers, content, and reputation have real monetary value — and you actually own them instead of a corporation.",

  gamefi: "Video games where the items, characters, and rewards you earn are real crypto assets you own and can sell. Play the game, own what you earn.",

  p2e: "Play to Earn. A gaming model where your time and skill inside a game translate into real cryptocurrency. The opposite of spending money on games that give you nothing back.",

  soulbound: "A token permanently attached to your wallet that cannot be sold or transferred. Used for credentials, reputation, and identity — like a diploma that lives on-chain.",

  zk: "Zero-Knowledge proof. A way of proving you know something without revealing what it is. Like proving you are over 18 without showing your full date of birth.",

  evm: "Ethereum Virtual Machine. The global computer that runs smart contracts on Ethereum and compatible chains like Celo. If a chain is EVM-compatible, Ethereum developers can build on it instantly.",

  mnemonic: "Another name for your seed phrase — the 12 or 24 words that back up your wallet. The word comes from memory. Ironically, the one thing you cannot afford to forget.",

  liquiditypool: "A pot of tokens locked in a smart contract that powers a decentralised exchange. You trade against the pool instead of against another person. Anyone can add to the pot and earn a share of fees.",

  protocol: "The rulebook that governs how a blockchain or DeFi platform operates. Think of it like the constitution of a small country — everyone follows the same rules or gets rejected.",

  governance: "The voting system of a decentralised protocol. Hold governance tokens and you get a say in how the platform evolves — like being a shareholder who actually gets to vote on decisions.",

  celo: "An Ethereum Layer 2 blockchain built for fast, cheap payments with a focus on mobile users. Think of it as the version of crypto designed for the person who has a smartphone but no bank account.",
};

module.exports = terms;
