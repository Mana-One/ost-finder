import { useState, useEffect } from "react";
import { ShazamService } from "../services";
import Loader from "./Loader.jsx";

const OstList = ({ musicTitle }) => {
    const [ tracks, setTracks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    useEffect(() => {
        let currentLast = true;
        const loadData = async () => {
            try {
                setIsLoading( true );
                if( musicTitle !== "" ){
                    const res = await ShazamService.fetchMusic( musicTitle );
                    currentLast && setTracks( res.tracks.hits.map( obj => obj.track ));
                } else {
                    currentLast && setTracks([]);
                }    
    
            } catch( err ){
                console.log( err.message );
            } finally {
                setIsLoading( false );
            }
        }
        loadData();

        return () => currentLast = false;

    }, [ musicTitle ]);

    if( musicTitle === "" ){
        return(
            <div className="right-flex-child">
                <h3>No anime selected</h3>
            </div>
        );
    }

    return(
        <div className="right-flex-child">
            <h1>Epic OSTs</h1>
            <Loader isLoading={isLoading}/>
            <ul>
                {tracks.map( track => <li key={track.key}>Title: {track.title}</li> )}
            </ul>
        </div>
    );
}

export default OstList;