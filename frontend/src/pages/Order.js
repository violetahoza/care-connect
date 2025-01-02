import React from "react";
import axios from "axios";
import "../style/Order.css";
import { useNavigate } from "react-router-dom";
import { currentOrder } from "../utils/Store";

const Order = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPayedOnline, setIsPayedOnline] = React.useState(currentOrder.isPayedOnline);
  const [isPayedCash, setIsPayedCash] = React.useState(currentOrder.isPayedCash);
  const [isDelivered, setIsDelivered] = React.useState(currentOrder.isDelivered);
  const [deliveryCompanyId, setDeliveryCompanyId] = React.useState(currentOrder.deliveryCompanyId);
  const [deliveryCompanyName, setDeliveryCompanyName] = React.useState(currentOrder.deliveryCompanyName);

  const navigate = useNavigate();

  const handleFinishEditing = async () => {
    setIsLoading(true);
    try {
      await axios.put("http://localhost:8080/updateShopOrder", {
        id: currentOrder.id,
        isPayedOnline: isPayedOnline ? 1 : 0,
        isPayedCash: isPayedCash ? 1 : 0,
        isDelivered: isDelivered ? 1 : 0,
        deliveryCompanyId: deliveryCompanyId,
        deliveryCompanyName: deliveryCompanyName,
      });
      navigate("/view-orders");
    } catch (error) {
      console.error("Error updating order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsPayedCash(currentOrder.isPayedCash);
    setIsPayedOnline(currentOrder.isPayedOnline);
    setIsDelivered(currentOrder.isDelivered);
    setDeliveryCompanyId(currentOrder.deliveryCompanyId);
    setDeliveryCompanyName(currentOrder.deliveryCompanyName);
  }, []);

  const handleBack = () => {
    navigate("/view-orders");
  };

  return (
    <section id="order">
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="order-id">Order Id:</label>
              <input
                type="text"
                id="order-id"
                value={currentOrder.id}
                required
              />
            </li>
            <li>
              <label for="delivery-company">Delivery company:</label>
              <input
                type="text"
                id="delivery-company"
                value={currentOrder.deliveryCompanyName}
                required
              />
            </li>
            <li>
              <label for="delivery-company-id">Delivery company Id:</label>
              <input
                type="text"
                id="delivery-company-id"
                placeholder={currentOrder.deliveryCompanyId}
                onChange={(e) => setDeliveryCompanyId(e.target.value)}
                value={deliveryCompanyId}
                required
              />
            </li>
            <li>
              <label for="client-first-name">Client first name:</label>
              <input
                type="text"
                id="client-first-name"
                value={currentOrder.firstName}
                required
              />
            </li>
            <li>
              <label for="client-last-name">Client last name:</label>
              <input
                type="text"
                id="client-last-name"
                value={currentOrder.lastName}
                required
              />
            </li>
            <li>
              <label for="address-country">Country:</label>
              <input
                type="text"
                id="address-country"
                value={currentOrder.addressCountry}
                required
              />
            </li>
            <li>
              <label for="address-city">City:</label>
              <input
                type="text"
                id="address-city"
                value={currentOrder.addressCity}
                required
              />
            </li>
            <li>
              <label for="address-street">Street:</label>
              <input
                type="text"
                id="address-street"
                value={currentOrder.addressStreet}
                required
              />
            </li>
            <li>
              <label for="address-number">Street number:</label>
              <input
                type="text"
                id="address-number"
                value={currentOrder.addressNumber}
                required
              />
            </li>
            <li>
              <label for="total-price">Total:</label>
              <input
                type="text"
                id="total-price"
                value={currentOrder.totalPrice}
                required
              />
            </li>
            <li>
              <input
                type="checkbox"
                name="online"
                id="online"
                checked={currentOrder.isPayedOnline}
                onChange={(e) => setIsPayedOnline(e.target.value)}
              />
              Payed online
            </li>
            <li>
              <input
                type="checkbox"
                name="cash"
                id="cash"
                checked={currentOrder.isPayedCash}
                onChange={(e) => setIsPayedCash(e.target.value)}
              />
              Payed cash
            </li>
            <li>
              <input
                type="checkbox"
                name="delivered"
                id="delivered"
                checked={currentOrder.isDelivered}
                onChange={(e) => setIsDelivered(e.target.value)}
              />
              Delivered
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleFinishEditing}>
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
        <button type="button" onClick={handleBack}>
          Back to Orders
        </button>
      </form>
    </section>
  );
};

export default Order;
