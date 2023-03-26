import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h2>Price: {price}</h2>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default TShirt