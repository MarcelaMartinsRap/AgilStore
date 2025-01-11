import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./inventory.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

const startDatabase = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price REAL NOT NULL
    )`,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela:", err.message);
      }
    }
  );
};

export default { db, startDatabase };
