import './styles.css';

const SearchCard = () => {
  return (
    <div className="base-card search-container">
      <div className="form-container">
        <form action="#">
          <div>
            <label htmlFor="ctrl-search"></label>
            <input
              type="text"
              id="ctrl-search"
              className="input-box"
              placeholder="Digite sua busca"
            />
          </div>
        </form>
      </div>

      <div className="btn-container">
        <button className="btn btn-icon btn-search">Buscar</button>
      </div>
    </div>
  );
};

export default SearchCard;
