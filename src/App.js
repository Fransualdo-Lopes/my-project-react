import React from 'react';
import '../src/style/App.css';
import Home from './components/Home'; // Importa o componente Home
import Shop from './components/Shop'; 
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Home /> {/* Renderiza o componente Home */}
      <Shop /> {/* Renderiza o componente Shop */}
      <ProductDetails /> {/* Renderiza o componente ProductDetails */}
    </div>
  );
}

export default App;
