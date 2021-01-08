const animeUrl = "https://graphql.anilist.co";

const searchQuery = `query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
          romaji
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
}