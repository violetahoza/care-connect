import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import { cart, userStoreData } from "../utils/Store";
import axios from "axios";

const CheckoutCard = () => {
  const navigate = useNavigate();

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].productPrice;
  }

  const handlePay = async () => {
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
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Online payment</h2>
        <fieldset>
          <legend>Complete the fields with your card info</legend>
          <ul>
            <li>
              <label for="card-number">Card number:</label>
              <input type="text" id="card-number" required />
            </li>
            <li>
              <label for="expiration-date">Expiration date:</label>
              <input type="text" id="expiration-date" required />
            </li>
            <li>
              <label for="security-code">Security code:</label>
              <input type="text" id="security-code" required />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handlePay}>
          Authorize payment
        </button>
      </form>
    </section>
  );
};

export default CheckoutCard;
