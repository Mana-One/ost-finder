import { useState, useEffect, useRef } from "react";
import { AnimeService } from "../services";
import SearchBar from "./SearchBar.jsx";

const Page1 = () => {
    const [ animes, setAnimes ] = useState([]);
    const [ nextPage, setNextPage ] = useState( 1 );
    const [ animeTitle, setAnimeTitle ] = useState("");

    const fetchData = useRef(() => {});
    fetchData.current = async () => {
        try {
            if( animeTitle ){
                const res = await AnimeService.searchAnime( animeTitle, nextPage, 5 );
            
                if( res.data.Page.media.length > 0 ){
                    setAnimes([ ...animes, ...res.data.Page.media ]);
                }
                if( res.data.Page.pageInfo.hasNextPage === true ){
                    setNextPage( nextPage + 1 );
                } else {
                    setNextPage( 0 );
                }
            }

        } catch( err ){
            alert( err.message );
        }
    }
 
    /*useEffect(() => {
        fetchData.current();
    }, []);*/

    useEffect(() => {
        setNextPage( 1 );
        setAnimes([]);
        fetchData.current();
    }, [ animeTitle ]);

    const showLoadButton = () => {
        if( nextPage > 0 ){
            return( <button onClick={() => fetchData.current()}>Load more</button> );
        } else {
            return null;
        }
    }

    return(
        <div>
            <h1>Anime List</h1>
            <SearchBar setData={setAnimeTitle}/>
            <ul>
                {animes.map( anime => <li key={anime.id}>{anime.title.romaji}</li>)}
            </ul>
            {showLoadButton()}
        </div>
    );
};

export default Page1;