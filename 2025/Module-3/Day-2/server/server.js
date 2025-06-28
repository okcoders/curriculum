const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json({success: true, message: 'hello from server'})
});

// get all messages
app.get('/api/messages', (req, res) => {
    db.all('SELECT * FROM messages', (err, rows) => {
      if (err) {
        res.status(500).json({success: false, message: err.message });
        return;
      }
      console.log(rows)
      res.status(200).json({success: true, data: rows});
    });
  });

// Add new message
app.post('/api/messages', (req, res) => {
  const { text, userId } = req.body;
  db.run(`INSERT INTO messages (text) VALUES (?, ?)`, [text, userId], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, text });
  });
});

// Update a message by ID
app.put('/api/messages/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text field is required' });
  }

  db.run(`UPDATE messages SET text = ? WHERE id = ?`, [text, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.status(200).json({ id, text });
  });
});

// Delete a message by ID
app.delete('/api/messages/:id', (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM messages WHERE id = ?`, id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.json({ success: true, id });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});