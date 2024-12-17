import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Produkt from './components/Product/Produkt';
 import Contact from './components/Contact/Contact';


function App() {
  return (<div>
    <Routes>
     <Route path='/' element={<Main />}/>
     <Route path='/Produkt' element={<Produkt/>}/>
     <Route path='/Contact' element={<Contact/>}/>
    </Routes>

  </div>
    

   
  

  );
}

export default App;
