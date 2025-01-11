import productService from "../services/productService.js";

const getAllProducts = (req, res) => {
  productService.getAllProducts((err, products) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(products);
  });
};

const getProductById = (req, res) => {
  const { id } = req.params;
  productService.getProductById(id, (err, product) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!product) return res.status(404).json({ message: "Produto não encontrado." });
    res.json(product);
  });
};

const addProduct = (req, res) => {
  const newProduct = req.body;
  productService.addProduct(newProduct, (err, product) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(product);
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  productService.updateProduct(id, updates, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produto atualizado com sucesso!" });
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  productService.deleteProduct(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produto excluído com sucesso!" });
  });
};

export default { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };
