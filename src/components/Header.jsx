import Link from "./Link"

import Link from "./Link.jsx";

export default Header = () => {
    return(
        <div>
            <Link className="header-link" href="/">Home</Link>
            <Link className="header-link" href="/api1">Api 1</Link>
            <Link className="header-link" href="/api1">Api 2</Link>
            <Link className="header-link" href="/both">Both APIs</Link>
        </div>
    )
}