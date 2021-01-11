const MusicSearchBar = ({ title, setMusicTitle, loadData }) => {
    const onChange = event => setMusicTitle( event.target.value );

    return( 
        <div>
            <input type="text" onChange={onChange}/>
            <button onClick={() => loadData(title)}>Search</button>
        </div>
    );
}

export default MusicSearchBar;