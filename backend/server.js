const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('http://user-service:5000/users');
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('http://product-service:6000/products');
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
