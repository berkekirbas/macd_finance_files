import React from "react";

function NotFound() {
    return (
        <div className="error-content">
            <div className="container">
                <img src="images/404.png" alt="" className="img-responsive" />
                <div className="error-message">
                    <h1 className="error-title">Whoops!</h1>
                    <p>
                        Looks like you are lost. But don't worry there is plenty
                        to see!!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
