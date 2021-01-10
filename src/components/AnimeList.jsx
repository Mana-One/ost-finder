const AnimeList = ({ animes, setData }) => {
    if( animes.length === 0 ){
        return null;
    }

    return(
        <ul>
            {animes.map( anime => <li key={anime.id} onClick={ event => setData( anime.id )}>
                {anime.title.userPreferred}
                <img src={anime.coverImage.medium} alt="medium-cover"/>
            </li>)}
        </ul>
    );
}

export default AnimeList;