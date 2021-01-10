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
            <div>
                <h3>No anime selected</h3>
            </div>
        );
    }

    return(
        <div>
            <div>
                <img src={anime.coverImage.large} alt="large-cover"/>
                <div>
                    <p>Title: {anime.title.userPreferred}</p>
                    <p>Alternative titles: {anime.title.romaji} | {anime.title.native}</p>
                    <p>Status: {anime.status}</p>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: anime?.description }}/>
        </div>
    );
}

export default AnimeDetails;