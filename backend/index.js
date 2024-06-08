const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'myuser',
  host: 'db',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

const sampleData = [
  { id: 1, description: 'Groceries', amount: 50 },
  { id: 2, description: 'Rent', amount: 1000 },
  { id: 3, description: 'Utilities', amount: 150 }
];


app.get('/api/data', async (req, res) => {
  try {
    // const result = await 
    // pool.query('SELECT * FROM mytable');
    res.json(sampleData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
