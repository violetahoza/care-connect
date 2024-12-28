import React from "react";
import "../style/ProductPageClient.css";
import { useNavigate } from "react-router-dom";
import { storedProducts, userStoreData } from "../utils/Store";
import { labels } from "../utils/Store";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  const handleViewProducts = async () => {
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

  const handleSkincare = async () => {
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

  const handleBath = async () => {
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

  const handleHair = async () => {
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
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div>
          <img
            class="center"
            src="https://ukcdc.co.uk/wp-content/uploads/2020/10/1.svg"
          />
          <h1 class="center">Thank you for your order!</h1>
          <h1 id="center">
            You will be announced by email when it will be delivered to your
            address!
          </h1>
        </div>
      </main>
    </section>
  );
};

export default Checkout;
