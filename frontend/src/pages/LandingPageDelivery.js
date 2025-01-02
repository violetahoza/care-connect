import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { orders } from "../utils/Store";

const LandingPageDelivery = () => {
  const navigate = useNavigate();

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
        orders[i].email = personalData.data.email;
    
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

  const handlePersonalData = () => {
    navigate("/personal-data");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Choose your desired operation:</h2>
        <button type="button" onClick={handlePersonalData}>
          View or Edit personal Data
        </button>
        <button type="button" onClick={handleViewOrders}>
          View orders
        </button>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </form>
    </section>
  );
};

export default LandingPageDelivery;
