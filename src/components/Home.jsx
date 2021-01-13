import React from "react";

const Home = () => {
    return(
        <div className="main home">
            <h1>Welcome to this test app: OST Finder !</h1>
            <div className="home-content flex-container">
                <div className="flex-child">
                    <h2>API 1: AniList</h2>
                    <p>An API that allows users to search for animes or mangas</p>
                    <p>Link: <a href="https://anilist.gitbook.io/anilist-apiv2-docs">AniList v2</a></p>
                </div>
                <div className="flex-child">
                    <h2>API 2: Shazam</h2>
                    <p>An API that allows users to search for musics</p>
                    <p>Link: <a href="https://rapidapi.com/apidojo/api/shazam">Shazam (RapidApi)</a></p>
                </div>
            </div>
        </div>
    );
}

export default Home;