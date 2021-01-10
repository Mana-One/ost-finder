const animeUrl = "https://graphql.anilist.co";

const searchQuery = `query( $id: Int, $page: Int, $perPage: Int, $search: String ){
    Page( page: $page, perPage: $perPage ){
        pageInfo {
            total
            hasNextPage
        }
        media( id: $id, search: $search, type: ANIME ){
            id
            title {
                userPreferred
            }
            coverImage {
                medium
            }
        }
    }
}`;

export const searchAnime = async ( search, page, perPage ) => {
    const res = await fetch(
        animeUrl,
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: searchQuery,
                variables: {
                    search,
                    page,
                    perPage
                }
            })
        }
    );
    return res.json();
};