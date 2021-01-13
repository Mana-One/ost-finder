import { useState } from "react";
import { ShazamService } from "../services";
import MusicSearchBar from "./MusicSearchBar.jsx";
import Loader from "./Loader.jsx";

const Page2 = () => {
    const [ musicTitle, setMusicTitle ] = useState("");
    const [ tracks, setTracks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    const clickHandler = async title => {
        try {
            setIsLoading( true );
            if( title !== "" ){
                const res = await ShazamService.fetchMusic( title );
                setTracks( res.tracks.hits?.map( obj => obj.track ));
            } else {
                setTracks([]);
            }

        } catch( err ){
            console.log( err.message );
            
        } finally {
            setIsLoading( false );
        }
    }

    const showList = () => {
        if( tracks.length ){
            return(
                <div>
                    <Loader isLoading={isLoading}/>
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
        <div className="main">
            <div className="music-container">
                <h1>Find music</h1>
                <MusicSearchBar title={musicTitle} setMusicTitle={setMusicTitle} loadData={clickHandler}/>
                {showList()}
            </div>
        </div>
    );
}

export default Page2;