import React from "react";

import { productData } from "../../utils/Data";
import "./Products.scss";
import ProductCard from "./ProductCard";


const Products = () => {
  const content = productData.map((productInfo, idx) => <ProductCard key={idx} idx={idx} productInfo={productInfo} />)
  return (
    <>
      <section className="product-wrapper background-E2F0F6 py-5">
        <div className="container py-sm-5">
          <div className="row">
            <div>
              <h2 className="heading text-center mb-4">
                <strong>Products</strong> we are proud of!
              </h2>
              <h3 className="sub-heading text-center mb-sm-5">
                The Next Generation Language Processing & Voice AI Solutions
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-5 justify-content-center">
              {content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
