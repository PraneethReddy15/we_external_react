import React, { useState } from 'react';
const ProductDetails = () => 
{
      const [showDetails, setShowDetails] = useState(false);
      const handleClick = () => {
            setShowDetails(!showDetails);
        };
  const ProductDetails = () => (
    <div style={{textAlign:'center'}}>
      <p><strong>Name:</strong> Laptop</p>
      <p><strong>Price:</strong> $1000</p>
      <p><strong>Category:</strong> Electronics</p>
      <hr/>
      <p><strong>Name:</strong> Laptop</p>
      <p><strong>Price:</strong> $1000</p>
      <p><strong>Category:</strong> Electronics</p>
      <hr/>

      <p><strong>Name:</strong> Laptop</p>
      <p><strong>Price:</strong> $1000</p>
      <p><strong>Category:</strong> Electronics</p>
      <hr/>

      <p><strong>Name:</strong> Laptop</p>
      <p><strong>Price:</strong> $1000</p>
      <p><strong>Category:</strong> Electronics</p>
      <hr/>

      <p><strong>Name:</strong> Laptop</p>
      <p><strong>Price:</strong> $1000</p>
      <p><strong>Category:</strong> Electronics</p>

    </div>
  );
  return (
    <>
      <button onClick={handleClick}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails ? <ProductDetails /> : null}
    </>
  );
};

export default ProductDetails;
