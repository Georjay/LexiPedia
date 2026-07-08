require('dotenv').config();
const express = require('express');
const { paymentMiddleware } = require('x402-express');
const terms = require('./terms');

const app = express();
const PORT = process.env.PORT || 3000;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const PRICE = process.env.PRICE || '0.01';

app.use(express.json());

// Payment middleware — blocks requests until 0.01 cUSD is paid
app.use('/define', paymentMiddleware(
  WALLET_ADDRESS,
  {
    '/define': {
      price: `$${PRICE}`,
      network: 'celo',
      config: {
        description: 'LexiPedia — Web3 term definition'
      }
    }
  }
));

// Main route — returns definition after payment
app.get('/define', (req, res) => {
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
    price_paid: `$${PRICE} cUSD`
  });
});

// Health check route — free, no payment needed
app.get('/', (req, res) => {
  res.json({
    name: 'LexiPedia',
    description: 'Pay-per-query Web3 dictionary on Celo',
    usage: '/define?term=blockchain',
    price: `$${PRICE} cUSD per query`,
    terms_available: Object.keys(terms).length
  });
});

app.listen(PORT, () => {
  console.log(`LexiPedia running on port ${PORT}`);
});