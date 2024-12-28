import React from "react";
import "../style/ProductForList.css";
import ProductForList from "../components/ProductForList";
import "../style/ViewProducts.css";
import { useNavigate } from "react-router-dom";
import { searchedProducts, userStoreData } from "../utils/Store";

const ViewProductsProvider = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (userStoreData.isAdmin === 1) {
      navigate("/landing-page-admin");
    } else if (userStoreData.isCustomer === 1) {
      navigate("/landing-page-customer");
    } else if (userStoreData.isEmployee === 1) {
      navigate("/landing-page-employee");
    } else if (userStoreData.isDelivery >= 1) {
      navigate("/landing-page-delivery");
    } else if (userStoreData.isProvider >= 1) {
      navigate("/landing-page-provider");
    }
  };

  return (
    <section id="products">
      <button type="button" onClick={handleBack}>
        Back
      </button>
      <h2>Products:</h2>
      {searchedProducts.map((product) => (
        <ProductForList
          productId={product.id}
          productName={product.productName}
          productDescription={product.productDescription}
          productCategory={product.productCategory}
          productPrice={product.productPrice}
          productAmount={product.productAmount}
          productStock={product.productStock}
          providerName={product.providerName}
          picture={product.picture}
          labels={product.labels}
        />
      ))}
    </section>
  );
};

export default ViewProductsProvider;
