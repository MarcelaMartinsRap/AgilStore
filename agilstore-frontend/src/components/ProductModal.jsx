import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProductModal = ({ isOpen, onClose, onSubmit, initialData = {}, type }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (type === "update" || type === "add") {
      setFormData(initialData);
    }
  }, [initialData, type]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
          {type === "add" && "Adicionar Produto"}
          {type === "update" && "Editar Produto"}
          {type === "delete" && "Excluir Produto"}
        </h2>
        {type === "delete" ? (
          <div>
            <p>Tem certeza que deseja excluir este produto?</p>
            <button onClick={() => onSubmit()}>Confirmar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name || ""}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Categoria"
              value={formData.category || ""}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantidade"
              value={formData.quantity || ""}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Preço"
              value={formData.price || ""}
              onChange={handleChange}
              required
            />
            <button type="submit">Salvar</button>
          </form>
        )}
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default ProductModal;
