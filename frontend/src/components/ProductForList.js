import React from "react";
import "../style/ProductForList.css";
import { useNavigate } from "react-router-dom";
import { currentProduct } from "../utils/Store";

const ProductForList = (props) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    currentProduct.id = props.productId;
    currentProduct.productName = props.productName;
    currentProduct.productDescription = props.productDescription;
    currentProduct.productPrice = props.productPrice;
    currentProduct.productAmount = props.productAmount;
    currentProduct.productStock = props.productStock;
    currentProduct.providerName = props.providerName;
    currentProduct.labels = props.labels;
    currentProduct.productCategory = props.productCategory;
    currentProduct.picture = props.picture;
    navigate("/product/" + props.productId);
  };

  return (
    <section id="product-for-list">
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="product-id">Product Id:</label>
              <input
                type="text"
                id="product-id"
                value={props.productId}
                required
              />
            </li>
            <li>
              <label for="product-name">Product name:</label>
              <input
                type="text"
                id="product-name"
                value={props.productName}
                required
              />
            </li>
            <li style={{ float: "right" }}>
              <button type="button" onClick={handleViewDetails}>
                View details
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
};

export default ProductForList;
