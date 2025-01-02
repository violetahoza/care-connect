import React from "react";
import axios from "axios";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import { userStoreData } from "../utils/Store";
import { userPersonalData } from "../utils/Store";
import { userAddressData } from "../utils/Store";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  let userLogin = {};

  const handleLogin = async () => {
    const res = await axios.get("http://localhost:8080/users", {});

    let toLandingPage = 0;

    res.data.forEach((element) => {
      if (
        document.getElementById("username").value === element.userName &&
        document.getElementById("password").value === element.userPassword
      ) {
        toLandingPage = 1;
        userLogin = element;
      }
    });

    if (toLandingPage === 1) {
      userStoreData.id = userLogin.id;
      userStoreData.userName = userLogin.userName;
      userStoreData.userPassword = userLogin.userPassword;
      userStoreData.userDataId = userLogin.userDataId;
      userStoreData.isAdmin = userLogin.isAdmin;
      userStoreData.isCustomer = userLogin.isCustomer;
      userStoreData.isEmployee = userLogin.isEmployee;
      userStoreData.isDelivery = userLogin.isDelivery;
      userStoreData.isProvider = userLogin.isProvider;

      const personalData = await axios.get(
        `http://localhost:8080/findUserData/${userLogin.userDataId}`,
        {}
      );
      userPersonalData.id = personalData.data.id;
      userPersonalData.firstName = personalData.data.firstName;
      userPersonalData.lastName = personalData.data.lastName;
      userPersonalData.email = personalData.data.email;
      userPersonalData.addressId = personalData.data.addressId;

      const addressData = await axios.get(
        `http://localhost:8080/findAddress/${personalData.data.addressId}`,
        {}
      );
      userAddressData.id = addressData.data.id;
      userAddressData.addressCountry = addressData.data.addressCountry;
      userAddressData.addressCity = addressData.data.addressCity;
      userAddressData.addressStreet = addressData.data.addressStreet;
      userAddressData.addressNumber = addressData.data.addressNumber;

      const userLabels = await axios.get(
        "http://localhost:8080/userLabels",
        {}
      );
      userStoreData.labels = [];
      for (let i = 0; i < userLabels.data.length; i++) {
        if (userLabels.data[i].userId === userStoreData.id) {
          userStoreData.labels.push(userLabels.data[i].labelId);
        }
      }

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
    } else {
      alert("Incorrect username or password");
      navigate("/login");
    }
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/password-reset");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Welcome Back to Care Connect!</h2>
        {/* <h2>Beautify</h2> */}
        <fieldset>
          {/* <legend>Log In</legend> */}
          <ul>
            <li>
              <label for="username" > Username:</label>
              <input type="text" id="username" placeholder="username" required />
              {/* <FaUser className="icon" /> */}
            </li>
            <li>
              <label for="password">Password:</label>
              <input type="password" id="password"  placeholder="password" required />
              {/* <FaLock className="icon" /> */}
            </li>
            <li>
              <i />
              <a onClick={handleForgotPassword} href="#">
                Forgot Password?
              </a>
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleCreateAccount}>
          Create an Account
        </button>
      </form>
    </section>
  );
};

export default Login;
