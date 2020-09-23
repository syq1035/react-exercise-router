import React from "react";
import products from "../mockups/data.json";

const Products = () => {
  return (
    <div className="products">
      <p>All Products:</p>
      {Object.keys(products).map(name => (
        <p key={products[name].id}>
          <a href={`/products/${products[name].id}`}>{name}</a>
        </p>
      ))}
    </div>
  );
};

export default Products;
