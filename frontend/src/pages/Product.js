import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Product.css";
import { currentProduct } from "../utils/Store";

const Product = () => {
  const [productName, setProductName] = React.useState(null);
  const [productDescription, setProductDescription] = React.useState(null);
  const [productPrice, setProductPrice] = React.useState(null);
  const [productAmount, setProductAmount] = React.useState(null);
  const [productStock, setProductStock] = React.useState(null);
  const [productCategory, setProductCategory] = React.useState(null);
  const [providerName, setProviderName] = React.useState(null);

  const navigate = useNavigate();

  const handleFinishEditing = async () => {
    const res = await axios.put("http://localhost:8080/updateProduct", {
      id: currentProduct.id,
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productAmount: productAmount,
      productStock: productStock,
      productCategory: productCategory,
    });

    navigate("/view-products");
  };

  const handleBack = () => {
    navigate("/view-products");
  };

  const handleDeleteProduct = async () => {
    const productLabels = await axios.get(
      "http://localhost:8080/productLabels",
      {}
    );
    for (let i = 0; i < productLabels.data.length; i++) {
      if (productLabels.data[i].productId === currentProduct.id) {
        await axios.delete(
          `http://localhost:8080/deleteProductLabel/${productLabels.data[i].id}`,
          {}
        );
      }
    }

    const productOrders = await axios.get(
      "http://localhost:8080/productOrders",
      {}
    );
    for (let i = 0; i < productOrders.data.length; i++) {
      if (productOrders.data[i].productId === currentProduct.id) {
        await axios.delete(
          `http://localhost:8080/deleteProductOrder/${productOrders.data[i].id}`,
          {}
        );
      }
    }

    const res = await axios.delete(
      `http://localhost:8080/deleteProduct/${currentProduct.id}`,
      {}
    );
  };

  return (
    <section id="product">
      <button type="button" onClick={handleBack}>
        Back
      </button>
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="product-id">Product Id:</label>
              <input
                type="text"
                id="product-id"
                value={currentProduct.id}
                required
              />
            </li>
            <li>
              <label for="product-name">Product name:</label>
              <input
                type="text"
                id="product-name"
                value={productName}
                placeholder={currentProduct.productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="product-description">Description:</label>
              <input
                type="text"
                id="product-description"
                value={productDescription}
                placeholder={currentProduct.productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="product-category">Category:</label>
              <input
                type="text"
                id="product-category"
                value={productCategory}
                placeholder={currentProduct.productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="product-price">Price:</label>
              <input
                type="text"
                id="product-price"
                value={productPrice}
                placeholder={currentProduct.productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="product-amount">Amount(ml):</label>
              <input
                type="text"
                id="product-amount"
                value={productAmount}
                placeholder={currentProduct.productAmount}
                onChange={(e) => setProductAmount(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="product-stock">Stock:</label>
              <input
                type="text"
                id="product-stock"
                value={productStock}
                placeholder={currentProduct.productStock}
                onChange={(e) => setProductStock(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="product-provider">Provider:</label>
              <input
                type="text"
                id="product-provider"
                value={providerName}
                placeholder={currentProduct.providerName}
                onChange={(e) => setProviderName(e.target.value)}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleFinishEditing}>
          Finish editing
        </button>
        <button type="button" onClick={handleDeleteProduct}>
          Delete product
        </button>
      </form>
    </section>
  );
};

export default Product;
