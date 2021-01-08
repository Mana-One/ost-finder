import { useState, useEffect } from "react";

export default Route = ({ path, children }) => {
    const [ curerntPath, setCurrentPath ] = useState( window.location.pathname );

    useEffect(() => {
        const onLocationChange = () => setCurrentPath( window.location.pathname );
        window.addEventListener( "popstate", onLocationChange );

        return () => window.removeEventListener( "popstate" );
    }, []);

    return currentPath === path ? children : null;
}