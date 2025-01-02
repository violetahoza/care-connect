import React from "react";
import "../style/Product.css";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../utils/Store";

const Client = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/view-clients");
  };

  return (
    <section id="product">
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="client-id">Client Id:</label>
              <input
                type="text"
                id="client-id"
                value={currentUser.id}
                required
              />
            </li>
            <li>
              <label for="client-first-name">First name:</label>
              <input
                type="text"
                id="client-first-name"
                value={currentUser.firstName}
                required
              />
            </li>
            <li>
              <label for="client-last-name">Last name:</label>
              <input
                type="text"
                id="client-last-name"
                value={currentUser.lastName}
                required
              />
            </li>
            <li>
              <label for="email">Email:</label>
              <input
                type="text"
                id="email"
                value={currentUser.email}
                required
              />
            </li>
            <li>
              <label for="country">Country:</label>
              <input
                type="text"
                id="country"
                value={currentUser.addressCountry}
                required
              />
            </li>
            <li>
              <label for="city">City:</label>
              <input
                type="text"
                id="city"
                value={currentUser.addressCity}
                required
              />
            </li>
            <li>
              <label for="street">Street name:</label>
              <input
                type="text"
                id="street"
                value={currentUser.addressStreet}
                required
              />
            </li>
            <li>
              <label for="street-number">Street number:</label>
              <input
                type="text"
                id="street-number"
                value={currentUser.addressNumber}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleBack}>
          Back to Clients
        </button>
      </form>
    </section>
  );
};

export default Client;
