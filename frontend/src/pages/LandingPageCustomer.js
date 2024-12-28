import React from "react";
import "../style/ProductPageClient.css";
import { useNavigate } from "react-router-dom";
import { storedProducts, userStoreData } from "../utils/Store";
import { labels } from "../utils/Store";
import axios from "axios";

const LandingPageCustomer = () => {
  const navigate = useNavigate();

  const handleViewProducts = async (e) => {
    e.preventDefault();
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
            storedProducts[i].labels.push(labels[j].id);
          }
        }
      }
      const providerName = await axios.get(
        `http://localhost:8080/findProvider/${storedProducts[i].providerId}`,
        {}
      );
      storedProducts[i].providerName = providerName.data.providerName;
    }

    let userProducts = [];
    for (let i = 0; i < storedProducts.length; i++) {
      for (let j = 0; j < userStoreData.labels.length; j++) {
        if (storedProducts[i].labels.includes(userStoreData.labels[j])) {
          userProducts.push(storedProducts[i]);
        }
      }
    }

    while (storedProducts.length > 0) {
      storedProducts.pop();
    }

    for (let i = 0; i < userProducts.length; i++) {
      storedProducts.push(userProducts[i]);
    }
    navigate("/view-products-customer");
  };

  const handlePersonalData = () => {
    navigate("/personal-data");
  };

  const handleBeautify = () => {
    navigate("/landing-page-customer");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSkincare = async (e) => {
    e.preventDefault();
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
      if (res.data[i].productCategory === "Skincare") {
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
            storedProducts[i].labels.push(labels[j].id);
          }
        }
      }
      const providerName = await axios.get(
        `http://localhost:8080/findProvider/${storedProducts[i].providerId}`,
        {}
      );
      storedProducts[i].providerName = providerName.data.providerName;
    }

    let userProducts = [];
    for (let i = 0; i < storedProducts.length; i++) {
      for (let j = 0; j < userStoreData.labels.length; j++) {
        if (storedProducts[i].labels.includes(userStoreData.labels[j])) {
          userProducts.push(storedProducts[i]);
        }
      }
    }

    while (storedProducts.length > 0) {
      storedProducts.pop();
    }

    for (let i = 0; i < userProducts.length; i++) {
      storedProducts.push(userProducts[i]);
    }
    navigate("/view-products-customer");
  };

  const handleBath = async (e) => {
    e.preventDefault();
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
      if (res.data[i].productCategory === "Bath") {
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
            storedProducts[i].labels.push(labels[j].id);
          }
        }
      }
      const providerName = await axios.get(
        `http://localhost:8080/findProvider/${storedProducts[i].providerId}`,
        {}
      );
      storedProducts[i].providerName = providerName.data.providerName;
    }

    let userProducts = [];
    for (let i = 0; i < storedProducts.length; i++) {
      for (let j = 0; j < userStoreData.labels.length; j++) {
        if (storedProducts[i].labels.includes(userStoreData.labels[j])) {
          userProducts.push(storedProducts[i]);
        }
      }
    }

    while (storedProducts.length > 0) {
      storedProducts.pop();
    }

    for (let i = 0; i < userProducts.length; i++) {
      storedProducts.push(userProducts[i]);
    }
    navigate("/view-products-customer");
  };

  const handleHair = async (e) => {
    e.preventDefault();
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
      if (res.data[i].productCategory === "Hair") {
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
            storedProducts[i].labels.push(labels[j].id);
          }
        }
      }
      const providerName = await axios.get(
        `http://localhost:8080/findProvider/${storedProducts[i].providerId}`,
        {}
      );
      storedProducts[i].providerName = providerName.data.providerName;
    }

    let userProducts = [];
    for (let i = 0; i < storedProducts.length; i++) {
      for (let j = 0; j < userStoreData.labels.length; j++) {
        if (storedProducts[i].labels.includes(userStoreData.labels[j])) {
          userProducts.push(storedProducts[i]);
        }
      }
    }

    while (storedProducts.length > 0) {
      storedProducts.pop();
    }

    for (let i = 0; i < userProducts.length; i++) {
      storedProducts.push(userProducts[i]);
    }
    navigate("/view-products-customer");
  };

  const handleShoppingCart = () => {
    navigate("/cart");
  };

  const handleSearch = async () => {
    const searchedProducts = [];
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

    const keyWord = document.getElementById("search").value;

    while (searchedProducts.length > 0) {
      searchedProducts.pop();
    }

    for (let i = 0; i < storedProducts.length; i++) {
      if (storedProducts[i].productName.includes(keyWord)) {
        searchedProducts.push(storedProducts[i]);
      }
    }

    while (storedProducts.length > 0) {
      storedProducts.pop();
    }

    for (let i = 0; i < searchedProducts.length; i++) {
      storedProducts.push(searchedProducts[i]);
    }

    navigate("/view-products-customer");
  };

  return (
    <section id="product-page-client">
      <nav class="flex-nav">
        <div class="container">
          <div class="grid menu">
            <div class="column-xs-8 column-md-6">
              <p id="highlight" href onClick={handleBeautify}>
                Beautify
              </p>
            </div>
            <div class="column-xs-4 column-md-6">
              <a href="#" class="toggle-nav">
                Menu <i class="ion-navicon-round"></i>
              </a>
              <ul>
                <li class="nav-item dropdown">
                  <a href onClick={handleViewProducts} class="dropdown-toggle">
                    Products <i class="ion-arrow-down-b"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href onClick={handleSkincare}>
                        Skincare
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href onClick={handleBath}>
                        Bath
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href onClick={handleHair}>
                        Hair
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href onClick={handlePersonalData}>
                    Personal Data
                  </a>
                </li>
                <li class="nav-item">
                  <a href onClick={handleShoppingCart}>
                    Shopping Cart
                  </a>
                </li>
                <li class="nav-item">
                  <a href onClick={handleLogout}>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div>
          <div>
            <img
              class="center"
              src="https://d3rzzb9pdm93i0.cloudfront.net/2022/04/16510210282ccd8ce95b83f699a3b496c6104ea266.jpg"
            />
          </div>
          <div class="container1">
            <h1 class="center">Welcome to our beauty products site!</h1>
          </div>
          <div class="container2">
            <p class="center">
              We are thrilled to offer you a customized shopping experience
              based on your individual needs and preferences. By completing our
              questionnaire when you registered, we were able to gather
              important information about your beauty concerns, desired results,
              and preferred product types. This allows us to recommend products
              that are tailored specifically for you.
            </p>
            <p class="center">
              We know that finding the right beauty products can be
              overwhelming, which is why we have taken the guesswork out of it
              for you. Our selection of products includes a wide range of
              options, from skincare to makeup to haircare and beyond. We have
              carefully curated our selection to ensure that you only see the
              items that will truly benefit you and help you achieve your beauty
              goals.
            </p>
            <p class="center">
              Thank you for choosing our site. We hope that you enjoy your
              personalized shopping experience and that you discover products
              that you love. Don't hesitate to reach out to us if you have any
              questions or need any assistance. We are here to help you on your
              journey to feeling and looking your best.
            </p>
          </div>
          <div class="container1">
            <h1 class="center">Enjoy your journey!</h1>
          </div>
          <form>
            <button class="button" onClick={handleViewProducts}>
              View Products
            </button>

            <button class="button" onClick={handleSkincare}>
              Skincare
            </button>

            <button class="button" onClick={handleBath}>
              Bath
            </button>

            <button class="button" onClick={handleHair}>
              Hair
            </button>
          </form>
          <div class="container1">
            <h1 class="center">Do you need a specific product?</h1>
          </div>
          <form>
            <label for="search">Keyword:</label>
            <input type="text" id="search" required />
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
      </main>
      <footer>
        <div class="container">
          <div class="row">
            <p class="copyright text-muted small">
              Copyright &copy; Violeta & Daria 2024. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default LandingPageCustomer;
