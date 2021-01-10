import { useState, useEffect, useRef } from "react";
import { AnimeService } from "../services";
import SearchBar from "./SearchBar.jsx";
import AnimeList from "./AnimeList.jsx";

const Page1 = () => {
    const [ animes, setAnimes ] = useState([]);
    const [ nextPage, setNextPage ] = useState({ hasNextPage: true, page: 1 });
    const [ animeTitle, setAnimeTitle ] = useState("");

    const fetchData = useRef(() => {});
    fetchData.current = async () => {
        try {
            console.log( `fetching ${animeTitle}\n`)
            const res = await AnimeService.searchAnime( animeTitle, 1, 5 );
    
            setAnimes(res.data.Page.media);

            if( res.data.Page.pageInfo.hasNextPage === true ){
                setNextPage({ hasNextPage: true, page: nextPage.page + 1 });
            } else {
                setNextPage({ hasNextPage: false, page: 1 });
            }

        } catch( err ){
            alert( err.message );
        }
    }

    useEffect(() => {
        if( animeTitle !== "" ){
            setNextPage( 1 );
            fetchData.current();
        }
           
    }, [ animeTitle ]);

    const showLoadButton = () => {
        if( animeTitle !== "" && nextPage > 0 ){
            return( <button onClick={() => fetchData.current()}>Load more</button> );
        } else {
            return null;
        }
    }

    return(
        <div>
            <h1>Anime List</h1>
            <SearchBar setData={setAnimeTitle}/>
            <AnimeList animes={animes}/>
            {showLoadButton()}
        </div>
    );
};

export default Page1;