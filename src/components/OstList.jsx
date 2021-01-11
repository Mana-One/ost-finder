import { useState, useEffect } from "react";
import { ShazamService } from "../services";

const OstList = ({ musicTitle }) => {
    const [ tracks, setTracks ] = useState([]);

    useEffect(() => {
        let currentLast = true;
        const loadData = async () => {
            try {
                if( musicTitle !== "" ){
                    const res = await ShazamService.fetchMusic( musicTitle );
                    currentLast && setTracks( res.tracks.hits.map( obj => obj.track ));
                }                
    
            } catch( err ){
                console.log( err.message );
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
            <ul>
                {tracks.map( track => <li key={track.key}>Title: {track.title}</li> )}
            </ul>
        </div>
    );
}

export default OstList;