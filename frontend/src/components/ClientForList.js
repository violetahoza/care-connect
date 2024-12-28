import React from "react";
import "../style/OrderForList.css";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../utils/Store";

const ClientForList = (props) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    currentUser.id = props.clientId;
    currentUser.firstName = props.clientFirstName;
    currentUser.lastName = props.clientLastName;
    currentUser.addressCountry = props.clientAddressCountry;
    currentUser.addressCity = props.clientAddressCity;
    currentUser.addressStreet = props.clientAddressStreet;
    currentUser.addressNumber = props.clientAddressNumber;
    navigate("/client/" + props.clientId);
  };

  return (
    <section id="order-for-list">
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="client-id">Client Id:</label>
              <input
                type="text"
                id="client-id"
                value={props.clientId}
                required
              />
            </li>
            <li>
              <label for="client-name">Client name:</label>
              <input
                type="text"
                id="client-name"
                value={`${props.clientFirstName}  ${props.clientLastName}`}
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

export default ClientForList;
