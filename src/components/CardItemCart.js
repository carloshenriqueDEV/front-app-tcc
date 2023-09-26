import React, { useContext } from "react";
import { CartContext } from '../contexts/CartContext';


function CardItemCart({item}) {
    const { addToCart, removeFromCart } = useContext(CartContext);

    return <>
        <div className="card mb-2">
                <div className="row justify-content-between">
                    <div className="col-4 col-sm-2 col-xl-1">
                        <img src={item.urlImage} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="row col-8 col-sm-10 col-xl-11">
                        <div className="align-self-center">
                            <span>{item?.descricao}</span>
                            <br></br>
                            <span>{item.count}</span>
                        </div>
                    </div>          
                </div>
        </div>
        <div className="mb-3">
             <button className="btn btn-danger" onClick={() => removeFromCart(item)}><i className="bi bi-dash"></i></button> <button className="btn btn-success w-2" onClick={() => addToCart({...item})}><i className="bi bi-plus-lg"></i></button>
        </div>
  </>
}

export default CardItemCart;