import { useState } from "react";
import { ShazamService } from "../services";
import MusicSearchBar from "./MusicSearchBar.jsx";
import OstList from "./OstList.jsx";
import Loader from "./Loader.jsx";

const Page2 = () => {
    const [ musicTitle, setMusicTitle ] = useState("");
    /*const [ tracks, setTracks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );*/

    /*const clickHandler = async title => {
        try {
            if( title !== "" ){
                /*const res = await ShazamService.fetchMusic( title );
                setTracks( res.tracks.hits?.map( obj => obj.track ));
                setMusicTitle
            } 

        } catch( err ){
            console.log( err.message );
            
        }
    }*/

    /*const showList = () => {
        if( tracks.length ){
            return(
                <div>
                    <Loader/>
                    <ul>
                        {tracks.map( track => <li key={track.key}>Title: {track.title}</li> )}
                    </ul>
                </div>
            );
        } else {
            return( <h2>No tracks found</h2> );
        }
    }*/

    return(
        <div className="main page2">
            <h1>Find music</h1>
            <MusicSearchBar setMusicTitle={setMusicTitle}/>   
            <OstList musicTitle={musicTitle}/>            
        </div>
    );
}

export default Page2;