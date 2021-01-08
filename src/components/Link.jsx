import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = event => {
        if( event.metaKey || event.ctrlKey ){
            return;
        }

        event.preventDefault();
        window.history.pushState({}, "", href );
        window.dispatchEvent( new PopStateEvent( "popstate" ));
    };

    return( 
    <a className={className} href={href} onClick={onClick}>
        {children}
    </a>
    );
}

export default Link;