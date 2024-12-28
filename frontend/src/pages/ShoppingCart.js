import "../style/ProductPageClient.css";
import { cart } from "../utils/Store";
import { useNavigate } from "react-router-dom";
import { storedProducts } from "../utils/Store";
import ProductForListCustomer from "../components/ProductForListCustomer";
import axios from "axios";
import React from "react";
import { userStoreData } from "../utils/Store";
import { labels } from "../utils/Store";

const ShoppingCart = () => {
  const navigate = useNavigate();
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].productPrice;
  }

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

  const handleCheckout = async () => {
    if (document.getElementById("cash").checked) {
      const res = await axios.post("http://localhost:8080/addShopOrder", {
        userId: userStoreData.id,
        totalPrice: total,
        deliveryCompanyId: 1,
        isPayedOnline: 1,
        isPayedCash: 0,
        isDelivered: 0,
      });
      for (let i = 0; i < cart.length; i++) {
        const res1 = axios.post("http://localhost:8080/addProductOrder", {
          productId: cart[i].id,
          orderId: res.data.id,
        });
        const res2 = axios.put("http://localhost:8080/updateProduct", {
          id: cart[i].id,
          productName: cart[i].productName,
          productDescription: cart[i].productDescription,
          productPrice: cart[i].productPrice,
          productCategory: cart[i].productCategory,
          providerId: cart[i].providerId,
          picture: cart[i].picture,
          productAmount: cart[i].productAmount,
          productStock: cart[i].productStock - 1,
        });
      }
      while (cart.length > 0) {
        cart.pop();
      }
      navigate("/checkout");
    } else if (document.getElementById("online").checked) {
      navigate("/checkout-card");
    }
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
          {cart.map((product) => (
            <ProductForListCustomer
              productId={product.id}
              productName={product.productName}
              productDescription={product.productDescription}
              productCategory={product.productCategory}
              productPrice={product.productPrice}
              productAmount={product.productAmount}
              productStock={product.productStock}
              providerName={product.providerName}
              picture={product.picture}
              labels={product.labels}
            />
          ))}
        </div>
        <div>
          <h3>Total: ${total}</h3>
          <ul>
            <li>
              <h3>Please select your payment method:</h3>
            </li>
            <li>
              <input type="checkbox" name="online" id="online" /> Online payment
            </li>
            <li>
              <input type="checkbox" name="cash" id="cash" /> Cash on delivery
            </li>
          </ul>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </main>
    </section>
  );
};

export default ShoppingCart;
