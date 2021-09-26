import React from 'react';
import "./ShoppingCart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import AddProductView from '../AddProductView/AddProductView';

const ShoppingCart = (props) => {
    
    const {saveItem} = props;
    console.log(saveItem)

    const total = saveItem.reduce((previousValue, currentValue) => previousValue + currentValue.cost, 0)

    return (
        <div>
            <div className="card mb-3 fixed">
            <div className="card-header">
                <h2> <span className="me-2 color">{<FontAwesomeIcon icon={faShoppingBag} />}</span> Shopping Cart</h2>
            </div>
                <div className="card-body scroll">
                    <div className="text-center mb-3">
                        <h6 className="card-title">Total Fighter Jet: <small>{saveItem.length}</small></h6>
                        <h5 className="card-title">Total Cost: <small>{total}</small></h5>
                    </div>
                    {
                        saveItem.map(product => <AddProductView  
                            key={product.id} 
                            name={product.name} 
                            img={product.img}   
                        ></AddProductView> )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;