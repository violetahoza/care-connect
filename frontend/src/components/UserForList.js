import React from "react";
import "../style/OrderForList.css";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../utils/Store";

const UserForList = (props) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    currentUser.id = props.userId;
    currentUser.userName = props.userUserName;
    currentUser.userPassword = props.userPassword;
    currentUser.isAdmin = props.userIsAdmin;
    currentUser.isCustomer = props.userIsCustomer;
    currentUser.isEmployee = props.userIsEmployee;
    currentUser.isDelivery = props.userIsDelivery;
    currentUser.isProvider = props.userIsProvider;
    currentUser.firstName = props.userFirstName;
    currentUser.lastName = props.userLastName;
    currentUser.email = props.userEmail;
    currentUser.addressCountry = props.userAddressCountry;
    currentUser.addressCity = props.userAddressCity;
    currentUser.addressStreet = props.userAddressStreet;
    currentUser.addressNumber = props.userAddressNumber;
    navigate("/user/" + props.userId);
  };

  return (
    <section id="order-for-list">
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="user-id">User Id:</label>
              <input type="text" id="user-id" value={props.userId} required />
            </li>
            <li>
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                value={props.userUserName}
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

export default UserForList;
