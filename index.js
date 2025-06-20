const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory product list
let products = [
  { id: 1, name: "Galaxy Watch", price: 199 },
  { id: 2, name: "Nebula Speaker", price: 89 }
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST new product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE product by ID
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
