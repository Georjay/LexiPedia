require('dotenv').config();
const express = require('express');
const { paymentMiddleware } = require('x402-express');
const cors = require('cors');
const terms = require('./terms');

const app = express();
const PORT = process.env.PORT || 3000;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Celo x402 facilitator — completely free
app.use(
  paymentMiddleware(
    WALLET_ADDRESS,
    {
      "GET /define": {
        price: {
          amount: "10000", // 0.01 USDC (6 decimals)
          asset: {
            address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C", // USDC on Celo
            decimals: 6,
            eip712: { name: "USDC", version: "2" },
          },
        },
        network: "eip155:42220", // Celo mainnet
      },
    },
    { url: "https://x402.celo.org" }, // Free Celo facilitator
  )
);

// Main route
app.get('/define', (req, res) => {
  const term = req.query.term?.toLowerCase().replace(/\s+/g, '');

  if (!term) {
    return res.status(400).json({
      error: 'Please provide a term. Example: /define?term=blockchain'
    });
  }

  const definition = terms[term];

  if (!definition) {
    return res.status(404).json({
      error: `Term "${req.query.term}" not found in LexiPedia yet.`
    });
  }

  res.json({
    term: req.query.term,
    definition: definition,
    powered_by: 'LexiPedia on Celo',
    price_paid: '0.01 USDC'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    name: 'LexiPedia',
    description: 'Pay-per-query Web3 dictionary on Celo',
    usage: '/define?term=blockchain',
    price: '0.01 USDC per query',
    network: 'Celo Mainnet',
    facilitator: 'x402.celo.org',
    terms_available: Object.keys(terms).length
  });
});

app.listen(PORT, () => {
  console.log(`LexiPedia running on port ${PORT}`);
});
