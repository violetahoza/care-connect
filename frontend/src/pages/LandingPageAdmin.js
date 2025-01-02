import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storedProducts } from "../utils/Store";
import { labels } from "../utils/Store";
import { orders } from "../utils/Store";
import { users } from "../utils/Store";
import { clients } from "../utils/Store";

const LandingPageAdmin = () => {
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

    navigate("/view-products");
  };

  const handlePersonalData = () => {
    navigate("/personal-data");
  };

  const handleSearchProducts = () => {
    navigate("/search-products");
  };

  const handleViewClients = async () => {
    while (clients.length > 0) {
      clients.pop();
    }
    const res = await axios.get("http://localhost:8080/users", {});
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].isCustomer === 1) clients.push(res.data[i]);
    }

    for (let i = 0; i < clients.length; i++) {
      const userData = await axios.get(
        `http://localhost:8080/findUserData/${clients[i].userDataId}`,
        {}
      );
      clients[i].firstName = userData.data.firstName;
      clients[i].lastName = userData.data.lastName;
      clients[i].email = userData.data.email;
      clients[i].addressId = userData.data.addressId;
      const address = await axios.get(
        `http://localhost:8080/findAddress/${userData.data.addressId}`,
        {}
      );
      clients[i].addressCountry = address.data.addressCountry;
      clients[i].addressCity = address.data.addressCity;
      clients[i].addressStreet = address.data.addressStreet;
      clients[i].addressNumber = address.data.addressNumber;
    }
    navigate("/view-clients");
  };

  const handleViewOrders = async () => {
    while (orders.length > 0) {
      orders.pop();
    }
    const res = await axios.get("http://localhost:8080/shopOrders", {});

    for (let i = 0; i < res.data.length; i++) {
      orders.push(res.data[i]);
    }

    let personalData = {};
    let user = {};

    for (let i = 0; i < orders.length; i++) {
      try {
        const orderId = orders[i].deliveryCompanyId;
        const delivery = await axios.get(
          `http://localhost:8080/findDeliveryCompany/${orderId}`
        );
        orders[i].deliveryCompanyName = delivery.data.deliveryCompanyName;
    
        const id = orders[i].userId;
        user = await axios.get(`http://localhost:8080/findUser/${id}`);
    
        personalData = await axios.get(
          `http://localhost:8080/findUserData/${user.data.userDataId}`
        );
    
        orders[i].firstName = personalData.data.firstName;
        orders[i].lastName = personalData.data.lastName;
    
        const addressData = await axios.get(
          `http://localhost:8080/findAddress/${personalData.data.addressId}`
        );
    
        orders[i].addressCountry = addressData.data.addressCountry;
        orders[i].addressCity = addressData.data.addressCity;
        orders[i].addressStreet = addressData.data.addressStreet;
        orders[i].addressNumber = addressData.data.addressNumber;
      } catch (error) {
        console.error(`Error fetching data for order ${orders[i].id}:`, error);
        // Handle the error appropriately, e.g., show a message to the user
      }
    }
    navigate("/view-orders");
  };

  const handleViewUsers = async () => {
    while (users.length > 0) {
      users.pop();
    }
    const res = await axios.get("http://localhost:8080/users", {});
    for (let i = 0; i < res.data.length; i++) {
      users.push(res.data[i]);
    }

    for (let i = 0; i < users.length; i++) {
      const userData = await axios.get(
        `http://localhost:8080/findUserData/${users[i].userDataId}`,
        {}
      );
      users[i].firstName = userData.data.firstName;
      users[i].lastName = userData.data.lastName;
      users[i].email = userData.data.email;
      users[i].addressId = userData.data.addressId;
      const address = await axios.get(
        `http://localhost:8080/findAddress/${userData.data.addressId}`,
        {}
      );
      users[i].addressCountry = address.data.addressCountry;
      users[i].addressCity = address.data.addressCity;
      users[i].addressStreet = address.data.addressStreet;
      users[i].addressNumber = address.data.addressNumber;
    }
    navigate("/view-users");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleAddProduct = () => {
    navigate("/add-product");
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
        <button type="button" onClick={handleSearchProducts}>
          Search products
        </button>
        <button type="button" onClick={handleAddProduct}>
          Add product
        </button>
        <button type="button" onClick={handleViewClients}>
          View clients
        </button>
        <button type="button" onClick={handleViewOrders}>
          View orders
        </button>
        <button type="button" onClick={handleViewUsers}>
          View users
        </button>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </form>
    </section>
  );
};

export default LandingPageAdmin;
