import './App.css';
import { CartProvider } from './contexts/CartContext';
import ServiceRouter from './services/RouterService';
import { AlertProvider } from './contexts/AlertContext';

function App() {
  return (<>
    
    <CartProvider>
      <AlertProvider>    
        <div className="App">
          <ServiceRouter />        
        </div>
      </AlertProvider>
    </CartProvider>
    </>
  );
}

export default App;
