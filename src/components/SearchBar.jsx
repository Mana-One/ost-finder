const SearchBar = ({ setData }) => {
    const onChange = event => setData( event.target.value );

    return( 
        <div>
            <p>Search: </p>
            <input type="text" onChange={onChange}/> 
        </div>
    );
}

export default SearchBar;