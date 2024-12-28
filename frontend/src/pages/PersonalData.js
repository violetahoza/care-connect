import React from "react";
import "../style/EntryPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";
import { userPersonalData } from "../utils/Store";
import { userAddressData } from "../utils/Store";

const PersonalData = () => {
  const [userName, setUsername] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [addressCountry, setAddressCountry] = React.useState(null);
  const [addressCity, setAddressCity] = React.useState(null);
  const [addressStreet, setAddressStreet] = React.useState(null);
  const [addressNumber, setAddressNumber] = React.useState(null);

  const navigate = useNavigate();

  const handleEdit = async (e) => {
    const updatedUser = await axios.put("http://localhost:8080/updateUser", {
      id: userStoreData.id,
      userName: userName,
      userPassword: userPassword,
      userDataId: userStoreData.userDataId,
    });

    userStoreData.userName = updatedUser.data.userName;
    userStoreData.userPassword = updatedUser.data.userPassword;

    const updatedUserData = await axios.put(
      "http://localhost:8080/updateUserData",
      {
        id: userPersonalData.id,
        firstName: firstName,
        lastName: lastName,
        addressId: userPersonalData.addressId,
      }
    );

    userPersonalData.firstName = updatedUserData.data.firstName;
    userPersonalData.lastName = updatedUserData.data.lastName;

    const updatedAddress = await axios.put(
      "http://localhost:8080/updateAddress",
      {
        id: userAddressData.id,
        addressCountry: addressCountry,
        addressCity: addressCity,
        addressStreet: addressStreet,
        addressNumber: addressNumber,
      }
    );

    userAddressData.addressCountry = updatedAddress.data.addressCountry;
    userAddressData.addressCity = updatedAddress.data.addressCity;
    userAddressData.addressStreet = updatedAddress.data.addressStreet;
    userAddressData.addressNumber = updatedAddress.data.addressNumber;

    navigate("/personal-data");
  };

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
    <section id="entry-page">
      <form>
        <h2>Personal Info</h2>
        <fieldset>
          <legend>Below are your personal data related to this account</legend>
          <ul>
            <li>
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder={userStoreData.userName}
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="password">Password:</label>
              <input
                type="text"
                id="password"
                placeholder={userStoreData.userPassword}
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="first-name">First Name:</label>
              <input
                type="text"
                id="first-name"
                placeholder={userPersonalData.firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="last-name">Last Name:</label>
              <input
                type="text"
                id="last-name"
                placeholder={userPersonalData.lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="country">Country:</label>
              <input
                type="text"
                id="country"
                placeholder={userAddressData.addressCountry}
                value={addressCountry}
                onChange={(e) => setAddressCountry(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="city">City:</label>
              <input
                type="text"
                id="city"
                placeholder={userAddressData.addressCity}
                value={addressCity}
                onChange={(e) => setAddressCity(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="street">Street name:</label>
              <input
                type="text"
                id="street"
                placeholder={userAddressData.addressStreet}
                value={addressStreet}
                onChange={(e) => setAddressStreet(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="street-number">Street number:</label>
              <input
                type="text"
                id="street-number"
                placeholder={userAddressData.addressNumber}
                value={addressNumber}
                onChange={(e) => setAddressNumber(e.target.value)}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleBack}>
          Back
        </button>
      </form>
    </section>
  );
};

export default PersonalData;
