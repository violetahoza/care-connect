import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userStoreData } from "../utils/Store";
import { userAddressData } from "../utils/Store";
import { userPersonalData } from "../utils/Store";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await axios.get("http://localhost:8080/users", {});

    const userAddress = {
      addressCountry: document.getElementById("country").value,
      addressCity: document.getElementById("city").value,
      addressStreet: document.getElementById("street").value,
      addressNumber: document.getElementById("street-number").value,
    };

    const userData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      addressId: 0,
    };

    const newUser = {
      userName: document.getElementById("username").value,
      userPassword: document.getElementById("password-field").value,
      userDataId: 0,
      isAdmin: 0,
      isCustomer: 1,
      isEmployee: 0,
      isDelivery: 0,
      isProvider: 0,
    };

    let existingAccount = 0;
    for (let i = 0; i < res.data.length; i++) {
      if (document.getElementById("username").value === res.data[i].userName) {
        existingAccount = 1;
      }
    }

    if (existingAccount === 1) {
      alert("There is an account with this username");
      navigate("/register");
    } else {
      const address = await axios.post(
        "http://localhost:8080/addAddress",
        userAddress
      );
      userData.addressId = address.data.id;

      userAddressData.id = address.data.id;
      userAddressData.addressCountry = address.data.addressCountry;
      userAddressData.addressCity = address.data.addressCity;
      userAddressData.addressStreet = address.data.addressStreet;
      userAddressData.addressNumber = address.data.addressNumber;

      const data = await axios.post(
        "http://localhost:8080/addUserData",
        userData
      );
      newUser.userDataId = data.data.id;

      userPersonalData.id = data.data.id;
      userPersonalData.firstName = data.data.firstName;
      userPersonalData.lastName = data.data.lastName;
      userPersonalData.addressId = data.data.addressId;

      const createdUser = await axios.post(
        "http://localhost:8080/addUser",
        newUser
      );
      userStoreData.id = createdUser.data.id;
      userStoreData.userName = createdUser.data.userName;
      userStoreData.userPassword = createdUser.data.userPassword;
      userStoreData.userDataId = createdUser.data.userDataId;
      userStoreData.isAdmin = 0;
      userStoreData.isCustomer = 1;
      userStoreData.isEmployee = 0;
      userStoreData.isDelivery = 0;
      userStoreData.isProvider = 0;

      navigate("/questionnaire");
    }
  };

  const handleExistingAccount = async () => {
    navigate("/login");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Sign Up!</h2>
        <fieldset>
          {/* <legend>Create Account</legend> */}
          <ul>
            <li>
              <label for="username">Username:</label>
              <input type="text" id="username" required />
            </li>
            <li>
              <label for="password-field">Password:</label>
              <input type="password" id="password-field" required />
            </li>
            <li>
              <label for="first-name">First Name:</label>
              <input type="text" id="first-name" required />
            </li>
            <li>
              <label for="last-name">Last Name:</label>
              <input type="text" id="last-name" required />
            </li>
            <li>
              <label for="country">Country:</label>
              <input type="text" id="country" required />
            </li>
            <li>
              <label for="city">City:</label>
              <input type="text" id="city" required />
            </li>
            <li>
              <label for="street">Street name:</label>
              <input type="text" id="street" required />
            </li>
            <li>
              <label for="street-number">Street number:</label>
              <input type="text" id="street-number" required />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleExistingAccount}>
          Have an Account?
        </button>
      </form>
    </section>
  );
};

export default Register;
