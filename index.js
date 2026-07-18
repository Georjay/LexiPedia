require('dotenv').config();
const express = require('express');
const { paymentMiddleware, x402ResourceServer } = require('@x402/express');
const { ExactEvmScheme } = require('@x402/evm/exact/server');
const { HTTPFacilitatorClient } = require('@x402/core/server');
const cors = require('cors');
const terms = require('./terms');

const app = express();
const PORT = process.env.PORT || 3000;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const X402_API_KEY = process.env.X402_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const facilitatorClient = new HTTPFacilitatorClient({
  url: "https://api.x402.celo.org",
  createAuthHeaders: async () => {
    const headers = { "X-API-Key": X402_API_KEY };
    return { verify: headers, settle: headers, supported: headers };
  },
});

// const facilitatorClient = new HTTPFacilitatorClient({
//   url: "https://api.x402.celo.org",
// });

// const facilitatorClient = new HTTPFacilitatorClient({
//   url: "https://api.x402.celobuilders.xyz",
//   createAuthHeaders: async () => {
//     const headers = { "X-API-Key": X402_API_KEY };
//     return { verify: headers, settle: headers, supported: headers };
//   },
// });


const resourceServer = new x402ResourceServer(facilitatorClient)
  .register("eip155:42220", new ExactEvmScheme());

// const resourceServer = new x402ResourceServer(facilitatorClient)
//   .register("celo", new ExactEvmScheme());


// app.use(
//   paymentMiddleware(
//     {
//       "GET /define": {
//         accepts: {
//           scheme: "exact",
//           network: "celo",
//           payTo: WALLET_ADDRESS,
//           price: {
//             asset: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
//             amount: "10000",
//             extra: { name: "USDC", version: "2" },
//           },
//         },
//         description: "LexiPedia Web3 term definition",
//         mimeType: "application/json",
//       },
//     },
//     resourceServer,
//   )
// );


app.use(
  paymentMiddleware(
    {
      "GET /define": {
        accepts: {
          scheme: "exact",
          network: "eip155:42220",
          payTo: WALLET_ADDRESS,
          price: {
            asset: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
            amount: "10000",
            extra: { name: "USDC", version: "2" },
          },
        },
        description: "LexiPedia Web3 term definition",
        mimeType: "application/json",
      },
    },
    resourceServer,
  )
);

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

app.get('/api/health', (req, res) => {
  res.json({
    name: 'LexiPedia',
    description: 'Pay-per-query Web3 dictionary on Celo',
    usage: '/define?term=blockchain',
    price: '0.01 USDC per query',
    network: 'Celo Mainnet',
    facilitator: 'api.x402.celo.org',
    terms_available: Object.keys(terms).length
  });
});

app.listen(PORT, () => {
  console.log(`LexiPedia running on port ${PORT}`);
});