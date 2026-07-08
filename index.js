require('dotenv').config();
const express = require('express');
const { createThirdwebClient } = require('thirdweb');
const { facilitator, settlePayment } = require('thirdweb/x402');
const { celoSepolia } = require('thirdweb/chains'); // testnet for now
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

app.get('/define', async (req, res) => {
  const paymentData = req.headers['payment-signature'] || req.headers['x-payment'];

  const params = {
    resourceUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    method: 'GET',
    paymentData,
    payTo: WALLET_ADDRESS,
    network: celoSepolia,
    price: '$0.01',
    facilitator: thirdwebFacilitator,
    routeConfig: {
      description: 'LexiPedia — Web3 term definition',
      mimeType: 'application/json',
    },
  };

  console.log('settlePayment params:', {
    resourceUrl: params.resourceUrl,
    method: params.method,
    paymentData: params.paymentData,
    payTo: params.payTo,
    network: params.network, // log the whole chain object
    price: params.price,
    hasSecretKey: !!process.env.THIRDWEB_SECRET_KEY,
    hasServerWallet: !!process.env.SERVER_WALLET_ADDRESS,
  });

  let result;
  try {
    result = await settlePayment(params);
  } catch (err) {
    console.error('settlePayment threw:', err);
    return res.status(500).json({
      error: 'settlePayment failed',
      message: err.message,
    });
  }

  // ...rest unchanged
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

app.listen(PORT, () => {
  console.log(`LexiPedia running on port ${PORT}`);
});