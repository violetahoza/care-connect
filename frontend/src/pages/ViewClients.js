import React from "react";
import "../style/OrderForList.css";
import ClientForList from "../components/ClientForList";
import "../style/ViewOrders.css";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";
import { clients } from "../utils/Store";

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
      <h2>Clients:</h2>
      {clients.map((client) => (
        <ClientForList
          clientId={client.id}
          clientFirstName={client.firstName}
          clientLastName={client.lastName}
          clientAddressCountry={client.addressCountry}
          clientAddressCity={client.addressCity}
          clientAddressStreet={client.addressStreet}
          clientAddressNumber={client.addressNumber}
        />
      ))}
    </section>
  );
};

export default ViewOrders;
