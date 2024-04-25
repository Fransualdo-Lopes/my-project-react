import React, { useState } from 'react';
import '../style/OurProducts.css';
import '../style/App.css';

const Home = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10', imageUrl: 'url-da-imagem-1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$15', imageUrl: 'url-da-imagem-2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$20', imageUrl: 'url-da-imagem-3' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$25', imageUrl: 'url-da-imagem-4' },
    // Adicione mais produtos conforme necessário
  ]);

  const handleShowMore = () => {
    // Adicione mais produtos ao estado de produtos
    // Aqui está um exemplo de adição de mais produtos, você pode fazer isso com sua própria lógica de carregamento
    const newProducts = [
      { id: 5, name: 'Product 5', description: 'Description of Product 5', price: '$30', imageUrl: 'url-da-imagem-5' },
      { id: 6, name: 'Product 6', description: 'Description of Product 6', price: '$35', imageUrl: 'url-da-imagem-6' },
      { id: 7, name: 'Product 7', description: 'Description of Product 7', price: '$40', imageUrl: 'url-da-imagem-7' },
      { id: 8, name: 'Product 8', description: 'Description of Product 8', price: '$45', imageUrl: 'url-da-imagem-8' },
    ];
    setProducts([...products, ...newProducts]);
  };

  return (
    <div>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className="show-more-button" onClick={handleShowMore}>Show More</button>
    </div>
  );
}

export default Home;
