import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Product.css";
import { currentProduct, storedProducts } from "../utils/Store";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [productName, setProductName] = useState(currentProduct.productName);
  const [productDescription, setProductDescription] = useState(currentProduct.productDescription);
  const [productCategory, setProductCategory] = useState(currentProduct.productCategory);
  const [productPrice, setProductPrice] = useState(currentProduct.productPrice);
  const [productAmount, setProductAmount] = useState(currentProduct.productAmount);
  const [productStock, setProductStock] = useState(currentProduct.productStock);
  const [providerName, setProviderName] = useState(currentProduct.providerName);

  const handleEditProduct = async (e) => {
    setIsLoading(true);
    try {
      const updatedProduct = await axios.put(`http://localhost:8080/updateProduct/${currentProduct.id}`, {
        id: currentProduct.id,
        productName: productName,
        productDescription: productDescription,
        productCategory: productCategory,
        productPrice: productPrice,
        productAmount: productAmount,
        productStock: productStock,
        providerName: providerName,
      });

      currentProduct.productName = updatedProduct.data.productName;
      currentProduct.productDescription = updatedProduct.data.productDescription;
      currentProduct.productCategory = updatedProduct.data.productCategory;
      currentProduct.productPrice = updatedProduct.data.productPrice;
      currentProduct.productAmount = updatedProduct.data.productAmount;
      currentProduct.productStock = updatedProduct.data.productStock;
      currentProduct.providerName = updatedProduct.data.providerName;
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setProductName(currentProduct.productName);
    setProductDescription(currentProduct.productDescription);
    setProductCategory(currentProduct.productCategory);
    setProductPrice(currentProduct.productPrice);
    setProductAmount(currentProduct.productAmount);
    setProductStock(currentProduct.productStock);
    setProviderName(currentProduct.providerName);
  }, []);

  const handleDeleteProduct = async () => {
    if(!window.confirm("Are you sure you want to delete this product?")) 
      return;
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:8080/deleteProduct/${currentProduct.id}`);
      const updatedProducts = storedProducts.filter(product => product.id !== currentProduct.id);
      storedProducts.length = 0;
      updatedProducts.forEach(product => storedProducts.push(product));
      navigate("/view-products");
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="product">
      <form>
        <h2>Edit Product</h2>
        
        <fieldset>
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
                value={currentProduct.productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </li>
            <li>
              <label htmlFor="product-description">Description</label>
              <input
                type="text"
                id="product-description"
                value={currentProduct.productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </li>
            <li>
              <label htmlFor="product-category">Category</label>
              <input
                type="text"
                id="product-category"
                value={ currentProduct.productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              />
            </li>
            <li>
              <label htmlFor="product-price">Price</label>
              <input
                type="number"
                id="product-price"
                value={currentProduct.productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
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
                value={currentProduct.productAmount}
                onChange={(e) => setProductAmount(e.target.value)}
                required
                min="0"
              />
            </li>
            <li>
              <label htmlFor="product-stock">Stock</label>
              <input
                type="number"
                id="product-stock"
                value={currentProduct.productStock}
                onChange={(e) => setProductStock(e.target.value)}
                required
                min="0"
              />
            </li>
            <li>
              <label htmlFor="product-provider">Provider</label>
              <input
                type="text"
                id="product-provider"
                value={currentProduct.providerName}
                onChange={(e) => setProviderName(e.target.value)}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleEditProduct}>
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
        <button type="button" onClick={handleDeleteProduct}>
          {isLoading ? "Deleting..." : "Delete Product"}
        </button>
        <button type="button" onClick={() => navigate("/view-products")}>
          Back to Products
        </button>
      </form>
    </section>
  );
};

export default Product;