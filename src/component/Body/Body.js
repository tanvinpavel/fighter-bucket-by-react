import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import "./Body.css"


const Body = () => {
    const [data, setData] = useState([]);

    //API load here
    useEffect( () => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    const [addToCart, setAddToCart] = useState([]);

    const clickHandler = (singleItem) => {
        //selected product add here
        const saveProduct = [...addToCart, singleItem];
        setAddToCart(saveProduct);
    }

    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            { data.map( item => <Card info={item} key={item.id} addClickHandler={clickHandler}></Card>) }
                        </div>
                    </div>
                    <div className="col-md-3">
                        {
                            <ShoppingCart saveItem={addToCart}></ShoppingCart>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;