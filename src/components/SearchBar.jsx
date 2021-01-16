const SearchBar = ({ setData }) => {
    const onChange = event => setData( event.target.value );

    return( <input className="anime-search" type="text" placeholder="Anime title" onChange={onChange}/> );
}

export default SearchBar;