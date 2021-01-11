const apiKey = "fea019b2f1mshc64271dd9a4aa30p104fb6jsnddb524717543";
const shazamUrl = "https://shazam.p.rapidapi.com/search";

export const fetchMusic = async title => {
    const res = await fetch( `${shazamUrl}?offset=0&limit=10&term=${title}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "shazam.p.rapidapi.com"
        }
    });

    return res.json();
}