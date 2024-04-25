import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Simulação de dados de produtos
  useEffect(() => {
    // Aqui você faria uma requisição à sua API para obter os produtos
    // Exemplo simplificado:
    const fetchProducts = async () => {
      // Simulação de dados de produtos
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Our Products </h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
