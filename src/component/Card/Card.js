import React from 'react';
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {name, img, Role, speed, manufacturers, cost} = props.info;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={img} className="card-img-top card-pic" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="card-text mt-3">
                            <p><small><b>Top-speed:</b> {speed}</small></p>
                            <p><small><b>Role:</b> {Role}</small></p>
                            <p><small><b>Manufacturers:</b> {manufacturers}</small></p>
                            <p><small><b>Cost:</b> ${cost}</small></p>
                        </div>
                        <div className="d-grid">
                            <button onClick={() => {props.addClickHandler(props.info)}} className="button button-color mt-3">{element}<span className="mx-2">Add to cart</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;