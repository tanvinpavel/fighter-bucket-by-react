import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="card my-3 shadow mx-auto banner">
                <div className="card-body">
                    <h3 className="card-title">Make your own Air Force</h3>
                    <p>Grab your squadron</p>
                    <h5>Total Budget: $30 Billion</h5>
                </div>
            </div>
        </div>
    );
};

export default Banner;