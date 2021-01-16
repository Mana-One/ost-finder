import { useState } from "react";

const MusicSearchBar = ({ setMusicTitle }) => {
    const [ userInput, setUserInput ] = useState( "" );
    const onChange = event => setUserInput( event.target.value )
    const onClick = event => setMusicTitle( userInput );

    return( 
        <div className="music-search">
            <input type="text" onChange={onChange}/>
            <button onClick={onClick}>Search</button>
        </div>
    );
}

export default MusicSearchBar;