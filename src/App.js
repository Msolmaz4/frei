import React from 'react';
import './App.css';
import Add from './pages/Add';
import Main from './pages/Main'
import Detail from './pages/Detail';

import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Update from './pages/Update';
import {ProProvider } from './Context/ProContext'



function App() {
  return (
    <div className="App">
  <ProProvider> 
   
  <Router>
        <Routes>
         <Route path='/' element={<Main/>}/>
         <Route path='/add' element={<Add/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </Router>



  </ProProvider>
      
    

    


     

    
      
     
    </div>
  );
}

export default App;
