import React from "react";
import Link from "./Link.jsx";

const Header = () => {
    return(
        <div className="header">
            <Link className="header-link" href="/">Home</Link>
            <Link className="header-link" href="/api1">Anime Finder</Link>
            <Link className="header-link" href="/api2">Shazam API</Link>
            <Link className="header-link" href="/both">OST Finder</Link>
        </div>
    );
}

export default Header;