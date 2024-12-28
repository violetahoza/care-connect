import "../style/EntryPage.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSave = async () => {
    const res = axios.post("http://localhost:8080/addProduct", {
      productName: document.getElementById("product-name").value,
      productDescription: document.getElementById("product-description").value,
      productCategory: document.getElementById("product-category").value,
      productPrice: document.getElementById("product-price").value,
      productAmount: document.getElementById("product-amount").value,
      productStock: document.getElementById("product-stock").value,
      providerId: document.getElementById("product-provider-id").value,
    });
  };

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
    <section id="entry-page">
      <form>
        <h2>Add a new product!</h2>
        <fieldset>
          <ul>
            <li>
              <label for="product-name">Product name:</label>
              <input type="text" id="product-name" required />
            </li>
            <li>
              <label for="product-description">Description:</label>
              <input type="text" id="product-description" required />
            </li>
            <li>
              <label for="product-category">Category:</label>
              <input type="text" id="product-category" required />
            </li>
            <li>
              <label for="product-price">Price:</label>
              <input type="text" id="product-price" required />
            </li>
            <li>
              <label for="product-amount">Amount(ml):</label>
              <input type="text" id="product-amount" required />
            </li>
            <li>
              <label for="product-stock">Stock:</label>
              <input type="text" id="product-stock" required />
            </li>
            <li>
              <label for="product-provider-id">Provider Id:</label>
              <input type="text" id="product-provider-id" required />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleBack}>
          Back
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
