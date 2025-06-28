const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  // Create table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )`);

  // Delete existing data (optional — to avoid duplicates)
  db.run(`DELETE FROM messages`);

  // Insert seed data
  const seedData = [
    'Hello from SQLite!',
    'Another seeded message',
    'Seeding is working!',
    'React + Node.js + SQLite = ❤️'
  ];

  const statement = db.prepare(`INSERT INTO messages (text) VALUES (?)`);
  seedData.forEach((message) => {
    statement.run(message);
  });
  statement.finalize();

  console.log('Database seeded!');
});

db.close();