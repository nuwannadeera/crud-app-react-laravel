import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loader() {
    return (
        <>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}

export default Loader