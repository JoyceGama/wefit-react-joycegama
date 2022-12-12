import "./style.css";

const Loading = ():JSX.Element => {

    return(
        <div className="spinner-container">
            <div className="container-loading">    
                <div className="loading-spinner"></div>
            </div>
        </div>
    )

}

export default Loading