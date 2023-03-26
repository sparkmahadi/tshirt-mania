import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    return (
        <div>
            <h2 className={cart.length === 2 ? 'orange' : 'lightblue'}>Order Summary</h2>
            <p className={`bold ${cart.length === 2 ? 'lightblue' : 'orange'}`}>order quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
               cart.length === 0 ? <p>Please buy at least one item!!!</p> : <p>Thanks for buying from us.</p>
            }

            {cart.length === 2 && <h4>Congo! You have bought two items.</h4>}
            {cart.length === 2 || <h4>Do you wanna buy next one?</h4>}
        </div>
    );
};

export default Cart;