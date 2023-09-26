import React, { useContext, useEffect, useState } from 'react';
import CardItemCart from '../components/CardItemCart';
import ReturnButton from '../components/ReturnButton';
import { CartContext } from '../contexts/CartContext';
import { AlertContext } from '../contexts/AlertContext';
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems, valorTotalAPagar, totalItens, clearCart} = useContext(CartContext);
  const [valorTotal, setValorTotal] = useState(valorTotalAPagar());
  const enderecos = ['Rua Oliveira Fausto, 35, Botafogo', 'Rua do Russel, 344, Glória']
  const { showAlert, hideAlert, alert } = useContext(AlertContext);
  const navigate = useNavigate();


  useEffect(()=>{
    setValorTotal(valorTotalAPagar())
  },[cartItems])

  const handleClick = () => {    
    if(totalItens() == 0){
      showAlert('warning', 'Ao menos um item deve ser selecionado para efetuar um pedido.');
      setTimeout(() => {hideAlert();}, 3000);
    }else{      
      showAlert('success', 'Pedido finalizado com sucesso'); 
      setTimeout(() => {hideAlert(); clearCart(); navigate("/");}, 3000);     
    }
  };

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

        <div className='row justify-content-around p-2'>
          <div >
            <ReturnButton  returnTo={'/'}></ReturnButton>
          </div>
          <div className='row vertical-scrollable mt-4'>
            <h1>Itens selecionados:</h1>
            {cartItems.map((item) => {
              return <div>
                <CardItemCart item={item} key={item.itemId}></CardItemCart>
              </div>
            })}
          </div>
          <div className='row col-10 align-self-center'>
            <h1>{valorTotal}</h1>
            <div className='form'>
              <label for="enderecoEntrega" className="form-label">Endereço de entrega</label>
              <select className="form-select mb-3" id="enderecoEntrega" aria-label="Default select example">
                {enderecos.map((x, i) => <option value={i}>{x}</option>)}
              </select>
              <label for="promocao" className="form-label">Promoção</label>
              <input className="form-control mb-3" id="promocao" type="text" placeholder='Código Promocional'></input>
              <button className='btn btn-primary form-control mb-3' onClick={handleClick}>Finalizar Pedido</button>
            </div>
          </div>
        </div>

  </>
  );
};

export default Cart;
