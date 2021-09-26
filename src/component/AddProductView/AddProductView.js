import React from 'react';
import "./AddProductView.css"

const AddProductView = (props) => {
    const {img, name} = props
    return (
        <div>
            <div className="card mb-3 shadow-sm">
                <div className="row g-0 product-view">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body custom-padding">
                            <p>{name}</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductView;