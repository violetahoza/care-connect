import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";
import axios from "axios";
import { storedProducts } from "../utils/Store";
import { labels } from "../utils/Store";

const LandingPageProvider = () => {
  const navigate = useNavigate();

  const handleViewProducts = async () => {
    while (storedProducts.length > 0) {
      storedProducts.pop();
    }
    const providerName = await axios.get(
      `http://localhost:8080/findProvider/${userStoreData.isProvider}`,
      {}
    );

    const res = await axios.get("http://localhost:8080/products", {});

    const allLabels = await axios.get("http://localhost:8080/labels", {});
    for (let i = 0; i < allLabels.data.length; i++) {
      labels.push(allLabels.data[i]);
    }

    const productLabels = await axios.get(
      "http://localhost:8080/productLabels",
      {}
    );

    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].providerId === userStoreData.isProvider) {
        storedProducts.push(res.data[i]);
      }
    }

    for (let i = 0; i < storedProducts.length; i++) {
      storedProducts[i].labels = [];
      for (let j = 0; j < labels.length; j++) {
        for (let k = 0; k < productLabels.data.length; k++) {
          if (
            productLabels.data[k].productId === storedProducts[i].id &&
            productLabels.data[k].labelId === labels[j].id
          ) {
            storedProducts[i].labels.push(labels[j].labelName);
          }
        }
      }
      storedProducts[i].providerName = providerName.data.providerName;
    }
    navigate("/view-products");
  };

  const handlePersonalData = () => {
    navigate("/personal-data");
  };

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleStockAlerts = async () => {
    while (storedProducts.length > 0) {
      storedProducts.pop();
    }
    const providerName = await axios.get(
      `http://localhost:8080/findProvider/${userStoreData.isProvider}`,
      {}
    );

    const res = await axios.get("http://localhost:8080/products", {});

    const allLabels = await axios.get("http://localhost:8080/labels", {});
    for (let i = 0; i < allLabels.data.length; i++) {
      labels.push(allLabels.data[i]);
    }

    const productLabels = await axios.get(
      "http://localhost:8080/productLabels",
      {}
    );

    for (let i = 0; i < res.data.length; i++) {
      if (
        res.data[i].providerId === userStoreData.isProvider &&
        res.data[i].productStock < 50
      ) {
        storedProducts.push(res.data[i]);
      }
    }

    for (let i = 0; i < storedProducts.length; i++) {
      storedProducts[i].labels = [];
      for (let j = 0; j < labels.length; j++) {
        for (let k = 0; k < productLabels.data.length; k++) {
          if (
            productLabels.data[k].productId === storedProducts[i].id &&
            productLabels.data[k].labelId === labels[j].id
          ) {
            storedProducts[i].labels.push(labels[j].labelName);
          }
        }
      }
      storedProducts[i].providerName = providerName.data.providerName;
    }
    navigate("/view-products");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Choose your desired operation:</h2>
        <button type="button" onClick={handlePersonalData}>
          View or Edit personal Data
        </button>
        <button type="button" onClick={handleViewProducts}>
          View products
        </button>
        <button type="button" onClick={handleStockAlerts}>
          Stock alerts
        </button>
        <button type="button" onClick={handleAddProduct}>
          Add product
        </button>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </form>
    </section>
  );
};

export default LandingPageProvider;
