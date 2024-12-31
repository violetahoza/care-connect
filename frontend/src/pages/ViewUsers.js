import React from "react";
import "../style/OrderForList.css";
import UserForList from "../components/UserForList";
import "../style/ViewOrders.css";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";
import { users } from "../utils/Store";

const ViewUsers = () => {
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
      <h2>Users</h2>
      {users.map((user) => (
        <UserForList
          userId={user.id}
          userUserName={user.userName}
          userPassword={user.userPassword}
          userIsAdmin={user.isAdmin}
          userIsCustomer={user.isCustomer}
          userIsEmployee={user.isEmployee}
          userIsDelivery={user.isDelivery}
          userIsProvider={user.isProvider}
          userFirstName={user.firstName}
          userLastName={user.lastName}
          userAddressCountry={user.addressCountry}
          userAddressCity={user.addressCity}
          userAddressStreet={user.addressStreet}
          userAddressNumber={user.addressNumber}
        />
      ))}
    </section>
  );
};

export default ViewUsers;
