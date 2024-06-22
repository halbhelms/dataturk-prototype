// src/server/database.js
const Database = require('better-sqlite3');
const path = require('path');

// Open or create the database file
const db = new Database(path.join(process.cwd(), 'src/server/database.db'));

// Create accounts table
db.prepare(`
  CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
  )
`).run();

// Create accounts table
db.prepare(`
  CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    accountName TEXT NOT NULL,
  )
`).run();

module.exports = db;
