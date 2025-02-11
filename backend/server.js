const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { Client } = require('pg'); // PostgreSQL client
const { password } = require('pg/lib/defaults');

app.use(cors());
app.use(express());

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'mydb',  // Replace with your actual database name
    user: 'janilee',           // Replace with your actual database user
    password: password       // Replace with your actual password
});

// Connect to PostgreSQL
client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

// Example route
app.get('/api', async (req, res) => {
    try {
        const result = await client.query('SELECT NOW()');
        res.send({ message: 'Hello from the backend!', time: result.rows[0] });
    } catch (err) {
        res.status(500).send({ message: 'Error querying PostgreSQL', error: err });
    }
});

app.get('/api/blog_posts', async (req, res) => {
    try {
      const result = await client.query('SELECT id, title, created_at FROM blog_posts ORDER BY created_at DESC');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: 'Database error', error });
    }
});

app.get('/api/blog_posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await client.query('SELECT * FROM blog_posts WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Database error', error });
    }
});
  

app.listen(port, () => {
    console.log(`Backend is running at http://localhost:${port}`);
});