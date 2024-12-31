import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Product.css";
import { currentProduct } from "../utils/Store";

const Product = () => {
  const [formData, setFormData] = useState({
    productName: currentProduct.productName || "",
    productDescription: currentProduct.productDescription || "",
    productPrice: currentProduct.productPrice || "",
    productAmount: currentProduct.productAmount || "",
    productStock: currentProduct.productStock || "",
    productCategory: currentProduct.productCategory || "",
    providerName: currentProduct.providerName || ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('product-', '')]: value
    }));
  };

  const handleFinishEditing = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const res = await axios.put("http://localhost:8080/updateProduct", {
        id: currentProduct.id,
      });

      navigate("/view-products");
    } catch (err) {
      setError("Failed to update product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    if (!window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Delete related product labels
      const productLabels = await axios.get("http://localhost:8080/productLabels");
      await Promise.all(
        productLabels.data
          .filter(label => label.productId === currentProduct.id)
          .map(label => 
            axios.delete(`http://localhost:8080/deleteProductLabel/${label.id}`)
          )
      );

      // Delete related product orders
      const productOrders = await axios.get("http://localhost:8080/productOrders");
      await Promise.all(
        productOrders.data
          .filter(order => order.productId === currentProduct.id)
          .map(order =>
            axios.delete(`http://localhost:8080/deleteProductOrder/${order.id}`)
          )
      );

      // Delete the product
      await axios.delete(`http://localhost:8080/deleteProduct/${currentProduct.id}`);
      
      navigate("/view-products");
    } catch (err) {
      setError("Failed to delete product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="product">
      <form>
        <h2>Edit Product</h2>
        {error && <div className="error-message">{error}</div>}
        
        <fieldset disabled={isLoading}>
          <ul>
            <li>
              <label htmlFor="product-id">Product ID</label>
              <input
                type="text"
                id="product-id"
                value={currentProduct.id}
                disabled
              />
            </li>
            <li>
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor="product-description">Description</label>
              <input
                type="text"
                id="product-description"
                value={formData.productDescription}
                onChange={handleInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor="product-category">Category</label>
              <input
                type="text"
                id="product-category"
                value={formData.productCategory}
                onChange={handleInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor="product-price">Price</label>
              <input
                type="number"
                id="product-price"
                value={formData.productPrice}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
              />
            </li>
            <li>
              <label htmlFor="product-amount">Amount (ml)</label>
              <input
                type="number"
                id="product-amount"
                value={formData.productAmount}
                onChange={handleInputChange}
                required
                min="0"
              />
            </li>
            <li>
              <label htmlFor="product-stock">Stock</label>
              <input
                type="number"
                id="product-stock"
                value={formData.productStock}
                onChange={handleInputChange}
                required
                min="0"
              />
            </li>
            <li>
              <label htmlFor="product-provider">Provider</label>
              <input
                type="text"
                id="product-provider"
                value={formData.providerName}
                onChange={handleInputChange}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleFinishEditing} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
        <button type="button" onClick={handleDeleteProduct} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete Product"}
        </button>
        <button type="button" onClick={() => navigate("/view-products")}>
          ← Back to Products
        </button>
      </form>
    </section>
  );
};

export default Product;