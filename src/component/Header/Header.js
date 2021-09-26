import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href="/navbar">
                        <span className="logo">{<FontAwesomeIcon style={{transform: "rotate(-46deg)"}} icon={faFighterJet}/>}</span>
                        Fighter Bucket
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;