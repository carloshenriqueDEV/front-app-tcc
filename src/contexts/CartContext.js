import React, { createContext, useState } from 'react';

//todo fazer a função valorTotalAPagar
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      const hasItemInCartItems = cartItems.find((x) => x.urlImage === item.urlImage)
      if(!hasItemInCartItems){
        item['count'] = 1;
        setCartItems([...cartItems, {...item}]);        
      }
      else{
          setCartItems(() => cartItems.map(x => {
              if(x.urlImage === item.urlImage){
                return {...x, count : x.count += 1};              
            }
            return x
          }
        ))
      }
    };
  
    const removeFromCart = (item) => { 
      //se count de produtos maior que um decrementa o count em um valor, se igual a um deleta o elemento do array  
      const itemOfArray = cartItems.find((x) => x.urlImage === item.urlImage)       

      if(itemOfArray){
        const count = itemOfArray.count - 1;
        if( count == 0){
          setCartItems(cartItems.filter((x) => x.urlImage !== item.urlImage));        
        }
        else{
            setCartItems(() => cartItems.map(x => {
                if(x.urlImage === item.urlImage){
                  return {...x, count : count};              
              }
              return x;
            }
          ))
        }
      }
    };

  const totalItens = ()=> {
    let total = 0;
    cartItems.forEach(x => {
      total += x?.count;
    })
    return total;
  }

  const getRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  const valorTotalAPagar = () =>{
    let total  = 0;
    cartItems.forEach(x => { 
      total += x.preco * x.count
    });
    return total;
  }

  const clearCart = () => setCartItems([])
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart, totalItens, valorTotalAPagar, getRandomNumber }}>
        {children}
      </CartContext.Provider>
    );
  };  

export const CartContext = createContext();
