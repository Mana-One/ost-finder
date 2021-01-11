import { useState } from "react";
import { ShazamService } from "../services";
import MusicSearchBar from "./MusicSearchBar.jsx";

const Page2 = () => {
    const [ musicTitle, setMusicTitle ] = useState("");
    const [ tracks, setTracks ] = useState([]);

    const clickHandler = async title => {
        try {
            if( title !== "" ){
                const res = await ShazamService.fetchMusic( title );
                setTracks( res.tracks.hits.map( obj => obj.track ));
            } else {
                setTracks([]);
            }

        } catch( err ){
            console.log( err.message );
        }
    }

    const showList = () => {
        if( tracks.length ){
            console.log( tracks );
            return(
                <div>
                    <ul>
                        {tracks.map( track => <li key={track.key}>Title: {track.title}</li> )}
                    </ul>
                </div>
            );
        } else {
            return( <h2>No tracks found</h2> );
        }
    }

    return(
        <div className="">
            <h1>Find music</h1>
            <MusicSearchBar title={musicTitle} setMusicTitle={setMusicTitle} loadData={clickHandler}/>
            {showList()}
        </div>
    );
}

export default Page2;