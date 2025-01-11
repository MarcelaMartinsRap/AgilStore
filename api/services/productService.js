import databaseConfig from "../database/databaseConfig.js";

const getAllProducts = (callback) => {
  databaseConfig.db.all("SELECT * FROM products", [], (err, rows) => {
    callback(err, rows);
  });
};

const getProductById = (id, callback) => {
  databaseConfig.db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
    callback(err, row);
  });
};

const addProduct = (product, callback) => {
  const { name, category, quantity, price } = product;
  databaseConfig.db.run(
    "INSERT INTO products (name, category, quantity, price) VALUES (?, ?, ?, ?)",
    [name, category, quantity, price],
    function (err) {
      callback(err, { id: this.lastID, ...product });
    }
  );
};

const updateProduct = (id, updates, callback) => {
  const { name, category, quantity, price } = updates;
  databaseConfig.db.run(
    "UPDATE products SET name = ?, category = ?, quantity = ?, price = ? WHERE id = ?",
    [name, category, quantity, price, id],
    (err) => callback(err)
  );
};

const deleteProduct = (id, callback) => {
  databaseConfig.db.run("DELETE FROM products WHERE id = ?", [id], (err) => callback(err));
};

export default { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };
