import React from 'react';
import './App.css';
import Add from './Add';
import Products from './components/Products';
import {ContextProvider} from './context/ProductContext'



function App() {
  return (
    <div className="App">
    <ContextProvider>

    <Add/>
       <Products/>
    </ContextProvider>


     

    
      
     
    </div>
  );
}

export default App;
