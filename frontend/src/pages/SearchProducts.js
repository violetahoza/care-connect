import React from "react";
import axios from "axios";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import { storedProducts } from "../utils/Store";
import { labels } from "../utils/Store";
import { searchedProducts } from "../utils/Store";

const SearchProducts = () => {
  const navigate = useNavigate();

  const handleSearch = async () => {
    while (storedProducts.length > 0) {
      storedProducts.pop();
    }
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
      storedProducts.push(res.data[i]);
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
      const providerName = await axios.get(
        `http://localhost:8080/findProvider/${storedProducts[i].providerId}`,
        {}
      );
      storedProducts[i].providerName = providerName.data.providerName;
    }

    const keyWord = document.getElementById("key-word").value;

    while (searchedProducts.length > 0) {
      searchedProducts.pop();
    }

    for (let i = 0; i < storedProducts.length; i++) {
      if (storedProducts[i].productName.includes(keyWord)) {
        searchedProducts.push(storedProducts[i]);
      }
    }

    navigate("/view-products-searched");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Search products:</h2>
        <fieldset>
          <legend>Write the name of the product or a key word</legend>
          <ul>
            <li>
              <label for="key-word">Looking for:</label>
              <input type="text" id="key-word" required />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
        <button type="button" onClick={() => navigate("/landing-page-admin")}>
          Back 
        </button>
      </form>
    </section>
  );
};

export default SearchProducts;
