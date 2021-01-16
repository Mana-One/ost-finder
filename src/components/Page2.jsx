import { useState } from "react";
import MusicSearchBar from "./MusicSearchBar.jsx";
import OstList from "./OstList.jsx";

const Page2 = () => {
    const [ musicTitle, setMusicTitle ] = useState("");

    return(
        <div className="main page2">
            <h1>Find music</h1>
            <MusicSearchBar setMusicTitle={setMusicTitle}/>   
            <OstList musicTitle={musicTitle}/>            
        </div>
    );
}

export default Page2;