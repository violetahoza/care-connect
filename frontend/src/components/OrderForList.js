import React from "react";
import "../style/OrderForList.css";
import { useNavigate } from "react-router-dom";
import { currentOrder } from "../utils/Store";

const OrderForList = (props) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    currentOrder.id = props.orderId;
    currentOrder.firstName = props.orderFirstName;
    currentOrder.lastName = props.orderLastName;
    currentOrder.addressCountry = props.orderAddressCountry;
    currentOrder.addressCity = props.orderAddressCity;
    currentOrder.addressStreet = props.orderAddressStreet;
    currentOrder.addressNumber = props.orderAddressNumber;
    currentOrder.totalPrice = props.orderTotalPrice;
    currentOrder.isPayedOnline = props.orderIsPayedOnline;
    currentOrder.isPayedCash = props.orderIsPayedCash;
    currentOrder.isDelivered = props.orderIsDelivered;
    currentOrder.deliveryCompanyName = props.orderDeliveryCompanyName;
    currentOrder.deliveryCompanyId = props.orderDeliveryCompanyId;
    navigate("/order/" + props.orderId);
  };

  return (
    <section id="order-for-list">
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="order-id">Order Id:</label>
              <input type="text" id="order-id" value={props.orderId} required />
            </li>
            <li>
              <label for="client-name">Client name:</label>
              <input
                type="text"
                id="client-name"
                value={`${props.orderFirstName}  ${props.orderLastName}`}
                required
              />
            </li>
            <li style={{ float: "right" }}>
              <button type="button" onClick={handleViewDetails}>
                View details
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
};

export default OrderForList;
