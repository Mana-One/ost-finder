import loader from "../img/loader.gif"

const Loader = ({ isLoading }) => {
    if( !isLoading ){
        return null;
    }

    return(
        <div className="loader">
            <img src={loader} alt="loader"/>
        </div>
    )
}

export default Loader;