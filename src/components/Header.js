import React from 'react';
import CartButton from './CartButton';

function Header({logo}) {
    return <> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <img src={logo} className="rounded-circle col-2 col-xl-1" alt="Logo"/>
      <input className="col-6 border border-2 rounded-pill me-2" type="search" placeholder=" Procurar..." aria-label="Search"/>    
      <CartButton></CartButton>
    </div>
  </nav>  
  </> ;
}

export default Header;