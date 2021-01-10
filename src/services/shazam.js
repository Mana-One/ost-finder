const apiKey = "fea019b2f1mshc64271dd9a4aa30p104fb6jsnddb524717543";
const shazamUrl = "https://shazam.p.rapidapi.com/search";

const fetchMusic = async title => {
    const res = await fetch( `${shazamUrl}?offset=0&limit=10&term=${search}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "fea019b2f1mshc64271dd9a4aa30p104fb6jsnddb524717543",
            "x-rapidapi-host": "shazam.p.rapidapi.com"
        }
    });

    return res.json();
}