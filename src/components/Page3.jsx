import { useState, useEffect, useRef } from "react";
import { AnimeService } from "../services";
import SearchBar from "./SearchBar.jsx";
import AnimeList from "./AnimeList.jsx";
import OstList from "./OstList.jsx";

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

    const clickHandler = anime => setAnimeOSTSearch( anime.title.userPreferred );

    const showLoadButton = () => {
        if( animeTitle !== "" && nextPage.page > 1 && nextPage.hasNextPage ){
            return( <button className="load-more-btn" onClick={() => loadNextPage()}>Load more</button> );
        } else {
            return null;
        }
    }

    return(
        <div className="main">
            <div className="row1 cols-containers">
                <div className="col2 left-col">
                    <h1>Find an anime to check out its soundtracks</h1>
                    <SearchBar setData={setAnimeTitle}/>
                    <AnimeList animes={animes} clickHandler={clickHandler}/>
                    {showLoadButton()}
                </div>
                <div className="col2 rows-container">
                    <h1>Epic OSTs</h1>
                    <OstList musicTitle={animeOSTSearch}/>
                </div>
            </div>
        </div>
    );
};

export default Page3;