import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './containers/imteListContainer/imteListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const greeting = "Bienvenidos a nuestra tienda online!!";

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <div >
            <h2 className="greeting">{greeting}</h2>
              <Routes>
                <Route path='/'  element={<ItemListContainer  />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/*' element={<h1>404 NOT FOUND</h1>}/>
              </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
