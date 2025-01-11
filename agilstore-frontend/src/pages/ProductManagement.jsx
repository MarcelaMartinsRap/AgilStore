import { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductModal from "../components/ProductModal";
import api from "../api/api";
import "../styles/global.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: "",
    data: {},
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/"); 
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleSearch = (query) => {
    setSearch(query.toLowerCase());
  };

  const handleAdd = async (data) => {
    try {
      await api.post("/", data); 
      fetchProducts();
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await api.put(`/${data.id}`, data); 
      fetchProducts();
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/${modalData.data.id}`); 
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
  );

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          onClick={() => setModalData({ isOpen: true, type: "add", data: {} })}
        >
          Adicionar Produto
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>R$ {product.price.toFixed(2)}</td>
              <td>
                <button
                  onClick={() =>
                    setModalData({
                      isOpen: true,
                      type: "update",
                      data: product,
                    })
                  }
                >
                  Editar
                </button>
                <button
                  onClick={() =>
                    setModalData({
                      isOpen: true,
                      type: "delete",
                      data: product,
                    })
                  }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, type: "", data: {} })}
        onSubmit={
          modalData.type === "add"
            ? handleAdd
            : modalData.type === "update"
            ? handleUpdate
            : handleDelete
        }
        initialData={modalData.data}
        type={modalData.type}
      />
    </div>
  );
};

export default ProductManagement;
