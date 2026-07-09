require('dotenv').config();
const express = require('express');
const { createThirdwebClient, defineChain } = require('thirdweb');
const { facilitator, settlePayment } = require('thirdweb/x402');
const terms = require('./terms');

const app = express();
const PORT = process.env.PORT || 3000;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;

app.use(express.json());

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
});

const thirdwebFacilitator = facilitator({
  client,
  serverWalletAddress: process.env.SERVER_WALLET_ADDRESS,
});


const { celo } = require('thirdweb/chains'); // swap back from defineChain(11142220)

app.get('/define', async (req, res) => {
  const paymentData = req.headers['payment-signature'] || req.headers['x-payment'];

  const params = {
    resourceUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    method: 'GET',
    paymentData,
    payTo: WALLET_ADDRESS,
    network: celo,
    price: {
      amount: '10000', // 0.01 USDC (6 decimals)
      asset: {
        address: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C', // Circle-verified, Celo mainnet
      },
    },
    facilitator: thirdwebFacilitator,
    routeConfig: {
      description: 'LexiPedia — Web3 term definition',
      mimeType: 'application/json',
    },
  };

  let result;
  try {
    result = await settlePayment(params);
  } catch (err) {
    console.error('settlePayment threw:', err);
    return res.status(500).json({ error: 'settlePayment failed', message: err.message });
  }

  if (result.status !== 200) {
    return res.status(result.status).set(result.responseHeaders).json(result.responseBody);
  }

  const term = req.query.term?.toLowerCase().replace(/\s+/g, '');
  if (!term) {
    return res.status(400).json({ error: 'Please provide a term. Example: /define?term=blockchain' });
  }
  const definition = terms[term];
  if (!definition) {
    return res.status(404).json({ error: `Term "${req.query.term}" not found in LexiPedia yet.` });
  }

  res.json({
    term: req.query.term,
    definition: definition,
    powered_by: 'LexiPedia on Celo',
    price_paid: '0.01 USDC'
  });
});

app.get('/', (req, res) => {
  res.json({
    name: 'LexiPedia',
    description: 'Pay-per-query Web3 dictionary on Celo',
    usage: '/define?term=blockchain',
    price: '0.01 USDC per query',
    network: 'Celo Sepolia (testnet)',
    facilitator: 'thirdweb',
    terms_available: Object.keys(terms).length
  });
});

app.get('/debug', (req, res) => {
  const hexAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  const checkAddr = (val) => ({
    raw: JSON.stringify(val),
    length: val?.length,
    validHexFormat: val ? hexAddressRegex.test(val) : false,
  });

  res.json({
    WALLET_ADDRESS: checkAddr(process.env.WALLET_ADDRESS),
    SERVER_WALLET_ADDRESS: checkAddr(process.env.SERVER_WALLET_ADDRESS),
    USDC_ADDRESS_HARDCODED: checkAddr('0xcebA9300f2b948710d2653dD7B07f33A8B32118C'),
  });
});

app.listen(PORT, () => {
  console.log(`LexiPedia running on port ${PORT}`);
});