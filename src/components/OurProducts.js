import React, { useState } from 'react';
import '../style/OurProducts.css';
import '../style/App.css';

import image1 from '../images/home/image 1.svg';
import image2 from '../images/home/image 2.svg';
import image3 from '../images/home/image 3.svg';
import image4 from '../images/home/image 4.svg';
import image5 from '../images/home/image 5.svg';
import image6 from '../images/home/image 6.svg';
import image7 from '../images/home/image 7.svg';
import image8 from '../images/home/image 8.svg';

const OurProducts = () => {
  const initialProducts = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', imageUrl: image1 },
    { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', imageUrl: image2 },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', imageUrl: image3 },
    { id: 4, name: 'Grifo', description: 'Description of Product 4', price: 'Rp 500.000', imageUrl: image4 },
    { id: 5, name: 'Muggo', description: 'Small mug', price: 'Rp 1.500.000', imageUrl: image5 },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 'Rp 150.000', imageUrl: image6 },
    { id: 7, name: 'Product 7', description: 'Description of Product 7', price: 'Rp 7.000.000', imageUrl: image7 },
    { id: 8, name: 'Product 8', description: 'Description of Product 8', price: 'Rp 500.000', imageUrl: image8 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore); // Alterna entre true e false

    // Se estiver mostrando menos produtos (showMore é falso), redefine para os produtos iniciais
    if (!showMore) {
      setProducts(initialProducts);
    } else {
      // Caso contrário, carrega mais produtos
      const newProducts = [
        { id: 9, name: 'Product 9', description: 'Description of Product 9', price: '$50', imageUrl: image1 },
        { id: 10, name: 'Product 10', description: 'Description of Product 10', price: '$55', imageUrl: image2 },
        { id: 11, name: 'Product 11', description: 'Description of Product 11', price: '$100', imageUrl: image3 },
        { id: 12, name: 'Product 12', description: 'Description of Product 12', price: '$15', imageUrl: image4 },
        { id: 13, name: 'Product 13', description: 'Description of Product 13', price: '$20', imageUrl: image5 },
        { id: 14, name: 'Product 14', description: 'Description of Product 14', price: '$50', imageUrl: image6 },
        { id: 15, name: 'Product 15', description: 'Description of Product 15', price: '$55', imageUrl: image7 },
        { id: 16, name: 'Product 16', description: 'Description of Product 16', price: '$55', imageUrl: image8 },
      ];

      setProducts([...products, ...newProducts]);
    }
  };

  return (
    <div>
      <h2 className="products-title">Our Products</h2>
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
      <button className="show-more-button" onClick={handleShowMore}>
        {showMore ? 'Show More' : 'Show Less'}
      </button>
    </div>
  );
}

export default OurProducts;
