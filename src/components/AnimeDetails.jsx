import { useState, useEffect } from "react";
import { AnimeService } from "../services";

const AnimeDetails = ({ animeId }) => {
    const [ anime, setAnime ] = useState( null );

    useEffect(() => {
        let currentLast = true;
        const loadData = async () => {
            try {
                if( animeId !== -1 ){
                    const res = await AnimeService.getDetails( animeId );
                    currentLast && setAnime( res.data.Media );
                    console.log( "fetched data")
                }

            } catch( err ){
                console.log( err.message );
            }
        }
        loadData();

        return () => currentLast = false;
    }, [animeId]);

    if( !anime ){
        return(
            <div className="col2 cols-containers">
                <div className="cols-container">
                    <h3>No anime selected</h3>
                </div>
            </div>
        );
    }

    return(
        <div className="col2 rows-container anime-container">
            <div className="anime-header cols-containers">
                <img src={anime.coverImage.large} alt="large-cover" className="col2"/>
                <div className="col2">
                    <h3>{anime.title.userPreferred}</h3>
                    <p>Alternative titles: {anime.title.romaji} | {anime.title.native}</p>
                    <p>Status: {anime.status}</p>
                </div>
            </div>
            <div className="anime-body" dangerouslySetInnerHTML={{ __html: anime?.description }}/>
        </div>
    );
}

export default AnimeDetails;