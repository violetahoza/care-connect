import React from "react";
import "../style/OrderForList.css";
import OrderForList from "../components/OrderForList";
import "../style/ViewOrders.css";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";
import { orders } from "../utils/Store";

const ViewOrders = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (userStoreData.isAdmin === 1) {
      navigate("/landing-page-admin");
    } else if (userStoreData.isCustomer === 1) {
      navigate("/landing-page-customer");
    } else if (userStoreData.isEmployee === 1) {
      navigate("/landing-page-employee");
    } else if (userStoreData.isDelivery >= 1) {
      navigate("/landing-page-delivery");
    } else if (userStoreData.isProvider >= 1) {
      navigate("/landing-page-provider");
    }
  };

  return (
    <section id="orders">
      <button type="button" onClick={handleBack}>
        Back
      </button>
      <h2>Orders</h2>
      {orders.map((order) => (
        <OrderForList
          orderId={order.id}
          orderUserId={order.userId}
          orderDeliveryCompanyId={order.deliveryCompanyId}
          orderIsPayedOnline={order.isPayedOnline}
          orderIsPayedCash={order.isPayedCash}
          orderIsDelivered={order.isDelivered}
          orderFirstName={order.firstName}
          orderLastName={order.lastName}
          orderEmail={order.email}
          orderAddressCountry={order.addressCountry}
          orderAddressCity={order.addressCity}
          orderAddressStreet={order.addressStreet}
          orderAddressNumber={order.addressNumber}
          orderTotalPrice={order.totalPrice}
          orderDeliveryCompanyName={order.deliveryCompanyName}
        />
      ))}
    </section>
  );
};

export default ViewOrders;
