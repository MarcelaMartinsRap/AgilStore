// eslint-disable-next-line react/prop-types
const Header = ({ onSearch }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Buscar produto..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={() => onSearch(document.querySelector('input').value)}>
        Buscar
      </button>
    </header>
  );
};

export default Header;
