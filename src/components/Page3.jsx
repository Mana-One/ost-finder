import { useState, useEffect, useRef } from "react";
import { AnimeService } from "../services";
import SearchBar from "./SearchBar.jsx";
import AnimeList from "./AnimeList.jsx";

const Page3 = () => {
    const [ animes, setAnimes ] = useState([]);
    const [ nextPage, setNextPage ] = useState({ hasNextPage: false, page: 1 });
    const [ animeTitle, setAnimeTitle ] = useState("");
    const [ animeOSTSearch, setAnimeOSTSearch ] = useState("");

    const fetchData = useRef(() => {});
    fetchData.current = async () => {
        try {
            const res = await AnimeService.searchAnime( animeTitle, 1, 5 );
    
            setAnimes(res.data.Page.media);

            if( res.data.Page.pageInfo.hasNextPage === true ){
                setNextPage({ hasNextPage: true, page: nextPage.page + 1 });
            } else {
                setNextPage({ hasNextPage: false, page: 1 });
            }

        } catch( err ){
            console.log( err.message );
        }
    }

    const loadNextPage = async () => {
        try {
            if( nextPage.hasNextPage ){
                const res = await AnimeService.searchAnime( animeTitle, nextPage.page, 5 );    
                setAnimes([ ...animes, ...res.data.Page.media ]);

                if( res.data.Page.pageInfo.hasNextPage === true ){
                    setNextPage({ hasNextPage: true, page: nextPage.page + 1 });
                } else {
                    setNextPage({ hasNextPage: false, page: 1 });
                }
            }
        } catch( err ){
            console.log( err.message );
        }
    }

    useEffect(() => {
        setNextPage({ hasNextPage: false, page: 1 });
        if( animeTitle !== "" ){            
            fetchData.current();
        } else {
            setAnimes([]);
        }
           
    }, [ animeTitle ]);

    const clickHandler = anime => setAnimeOSTSearch( anime.title );

    const showLoadButton = () => {
        if( animeTitle !== "" && nextPage.page > 1 && nextPage.hasNextPage ){
            return( <button onClick={() => loadNextPage()}>Load more</button> );
        } else {
            return null;
        }
    }

    return(
        <div>
            <h1>Anime List</h1>
            <SearchBar setData={setAnimeTitle}/>
            <AnimeList animes={animes} clickHandler={clickHandler}/>
            {showLoadButton()}
        </div>
    );
};

export default Page3;