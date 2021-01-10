import React from "react";
import Link from "./Link.jsx";

const Header = () => {
    return(
        <div className="header">
            <Link className="header-link" href="/">Home</Link>
            <Link className="header-link" href="/api1">Api 1</Link>
            <Link className="header-link" href="/api2">Api 2</Link>
            <Link className="header-link" href="/both">Both APIs</Link>
        </div>
    );
}

export default Header;