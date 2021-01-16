import { useState, useEffect } from "react";
import { ShazamService } from "../services";
import Loader from "./Loader.jsx";


const clickHandler = url => {
    const tab = window.open( url, "_blank" );
    tab.focus();
}

const OstList = ({ musicTitle }) => {
    const [ tracks, setTracks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    useEffect(() => {
        let currentLast = true;
        ( async () => {
            await setIsLoading( true );
            try { 
                if( musicTitle !== "" ){
                    const res = await ShazamService.fetchMusic( musicTitle );
                    currentLast && setTracks( res.tracks === undefined ? 
                        [] :
                        res.tracks.hits.map( obj => obj.track )
                    );
                }
    
            } catch( err ){
                console.log( err.message );
            } finally {
                await setIsLoading( false );
            }
        })();            

        return () => currentLast = false;

    }, [ musicTitle ]);


    if( isLoading === true ){
        return( <Loader/> );
    }

    return(
        <div className="cols-containers col1">
            { tracks.length === 0 ? 
                <h3>No tracks found !</h3> : 
                <ul className="track-list">
                    {tracks.map( track => <li key={track.key}>
                        Title: <a href="#" onClick={ event => clickHandler( track.url )}>
                            {track.title}
                        </a> by {track.subtitle}
                    </li> )}
                </ul>
            }            
        </div>
    );
}

export default OstList;