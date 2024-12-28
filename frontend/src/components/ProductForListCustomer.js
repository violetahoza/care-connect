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
    navigate("/product-customer/" + props.productId);
  };

  return (
    <section id="product-for-list">
      <form>
        <fieldset>
          <ul>
            <li>
              <img
                src={props.picture}
                alt="product picture"
                class="product-image-list"
              />
            </li>
            <li class="product-name">
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
