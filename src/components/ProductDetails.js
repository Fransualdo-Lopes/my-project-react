import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Simulação de dados do produto
  useEffect(() => {
    // Aqui você faria uma requisição à sua API para obter os detalhes do produto
    // Exemplo simplificado:
    const fetchProduct = async () => {
      // Simulação de dados do produto
      const response = await fetch(`https://api.example.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: R${product.price}</p>
      {/* Outras informações do produto */}
    </div>
  );
}

export default ProductDetails;
