import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const customButtonStyle = {
    backgroundColor: '#ff6600',
    color: 'white',
  };

function CartButton() {
    const {cartItems, totalItens} = useContext(CartContext);
    const [total, setTotal] = useState(totalItens());

    useEffect(() => {
      setTotal(totalItens());
    }, [cartItems])

    return ( <Link className="btn custom-btn rounded-pill" style={customButtonStyle} to="/carrinho">
       <i className="bi bi-cart-fill"></i>
        <span>{total}</span>
    </Link> );
}

export default CartButton;