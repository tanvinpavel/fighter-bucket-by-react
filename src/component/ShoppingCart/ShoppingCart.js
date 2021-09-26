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
        <div className="sticky shadow">
            <div className="card mb-3 shopping-cart">
            <div className="card-header shadow">
                <h4 className="text-center"> <span className="me-2 color">{<FontAwesomeIcon icon={faShoppingBag} />}</span> Shopping Cart</h4>
            </div>
                <div className="card-body scroll">
                    <div className="text-center mb-3 mt-2">
                        <p className="card-title"><b>Total Fighter Jet:</b> <small>{saveItem.length}</small></p>
                        <p className="card-title"><b>Total Cost:</b> <small>{total}</small></p>
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