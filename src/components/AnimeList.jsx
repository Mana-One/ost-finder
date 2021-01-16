const AnimeList = ({ animes, clickHandler }) => {
    if( animes.length === 0 ){
        return null;
    }

    return(
        <ul className="anime-list">
            {animes.map( anime => <li key={anime.id} onClick={() => clickHandler( anime )}>
                {anime.title.userPreferred}
            </li>)}
        </ul>
    );
}

export default AnimeList;