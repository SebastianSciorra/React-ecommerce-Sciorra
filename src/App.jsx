import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './containers/imteListContainer/imteListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <ItemListContainer greeting={'Bienvenido tutor, gracias por revisar la preentrega!'} />
      </div>
    </div>
  );
}

export default App;
