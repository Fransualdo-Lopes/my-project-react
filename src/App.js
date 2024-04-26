import React from 'react';
import '../src/style/App.css';
import Header from './components/Header';
import Home from './components/Home'; // Importa o componente Home
import OurProducts from './components/OurProducts';
//import Shop from './components/Shop'; 
//import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      <OurProducts /> 
      {/*<Shop /> */}
      {/*<ProductDetails /> */}
      <Footer /> 
    </div>
  );
}

export default App;
