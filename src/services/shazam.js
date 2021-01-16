import { shazamKey } from "../config.js";
const shazamUrl = "https://shazam.p.rapidapi.com/search";

export const fetchMusic = async title => {
    const res = await fetch( `${shazamUrl}?offset=0&limit=10&term=${title}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": shazamKey,
            "x-rapidapi-host": "shazam.p.rapidapi.com"
        }
    });

    return res.json();
}