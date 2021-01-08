const SearchBar = ({ setData }) => {
    const onChange = event => setData( event.target.value );

    return( <input type="text" onChange={onChange}/> );
}

export default SearchBar;