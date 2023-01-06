const Search = (props) => {
  const handleSearch = (ev) => {
    props.handleSearch(ev.target.value);
  };
  return (
    <form className="search">
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        placeholder="Buscar titulo"
        value={props.searchShow}
        onChange={handleSearch}
      />
    </form>
  );
};

export default Search;
