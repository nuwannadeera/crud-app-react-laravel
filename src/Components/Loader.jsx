import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loader() {
    const loaderStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
    };

    return (
        <div style={loaderStyle}>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader