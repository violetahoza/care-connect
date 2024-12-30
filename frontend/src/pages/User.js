import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Product.css";
import { currentUser } from "../utils/Store";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();

  const [userName, setUsername] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [addressCountry, setAddressCountry] = React.useState(null);
  const [addressCity, setAddressCity] = React.useState(null);
  const [addressStreet, setAddressStreet] = React.useState(null);
  const [addressNumber, setAddressNumber] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(null);
  const [isCustomer, setIsCustomer] = React.useState(null);
  const [isEmployee, setIsEmployee] = React.useState(null);
  const [isDelivery, setIsDelivery] = React.useState(null);
  const [isProvider, setIsProvider] = React.useState(null);

  const handleBack = () => {
    navigate("/view-users");
  };

  const handleFinishEditing = async () => {
    const updatedUser = await axios.put("http://localhost:8080/updateUser", {
      id: currentUser.id,
      userName: userName,
      userPassword: userPassword,
      userDataId: currentUser.userDataId,
      isAdmin: isAdmin,
      isCustomer: isCustomer,
      isEmployee: isEmployee,
      isDelivery: isDelivery,
      isProvider: isProvider,
    });

    currentUser.userName = updatedUser.data.userName;
    currentUser.userPassword = updatedUser.data.userPassword;
    currentUser.isAdmin = updatedUser.data.isAdmin;
    currentUser.isCustomer = updatedUser.data.isCustomer;
    currentUser.isEmployee = updatedUser.data.isEmployee;
    currentUser.isDelivery = updatedUser.data.isDelivery;
    currentUser.isProvider = updatedUser.data.isProvider;

    const updatedUserData = await axios.put(
      "http://localhost:8080/updateUserData",
      {
        id: currentUser.id,
        firstName: firstName,
        lastName: lastName,
        addressId: currentUser.addressId,
      }
    );

    currentUser.firstName = updatedUserData.data.firstName;
    currentUser.lastName = updatedUserData.data.lastName;

    const updatedAddress = await axios.put(
      "http://localhost:8080/updateAddress",
      {
        id: currentUser.id,
        addressCountry: addressCountry,
        addressCity: addressCity,
        addressStreet: addressStreet,
        addressNumber: addressNumber,
      }
    );

    currentUser.addressCountry = updatedAddress.data.addressCountry;
    currentUser.addressCity = updatedAddress.data.addressCity;
    currentUser.addressStreet = updatedAddress.data.addressStreet;
    currentUser.addressNumber = updatedAddress.data.addressNumber;
    navigate("/view-users");
  };

  const handleDeleteUser = () => {
    const res = axios.delete(
      `http://localhost:8080/deleteUser/${currentUser.id}`,
      {}
    );
    navigate("/view-users");
  };

  return (
    <section id="product">
      <button type="button" onClick={handleBack}>
        Back
      </button>
      <form>
        <fieldset>
          <ul>
            <li>
              <label for="user-id">User Id:</label>
              <input
                type="text"
                id="user-id"
                placeholder={currentUser.id}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder={currentUser.userName}
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
                placeholder={currentUser.userPassword}
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="isAdmin">Admin:</label>
              <input
                type="text"
                id="isAdmin"
                placeholder={currentUser.isAdmin}
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="isEmployee">Employee:</label>
              <input
                type="text"
                id="isEmployee"
                placeholder={currentUser.isEmployee}
                value={isEmployee}
                onChange={(e) => setIsEmployee(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="isDelivery">Delivery:</label>
              <input
                type="text"
                id="isDelivery"
                placeholder={currentUser.isDelivery}
                value={isDelivery}
                onChange={(e) => setIsDelivery(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="isProvider">Provider:</label>
              <input
                type="text"
                id="isProvider"
                placeholder={currentUser.isProvider}
                value={isProvider}
                onChange={(e) => setIsProvider(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="isCustomer">Customer:</label>
              <input
                type="text"
                id="isCustomer"
                placeholder={currentUser.isCustomer}
                value={isCustomer}
                onChange={(e) => setIsCustomer(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="first-name">First Name:</label>
              <input
                type="text"
                id="first-name"
                placeholder={currentUser.firstName}
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
                placeholder={currentUser.lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </li>
            <li>
              <label for="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder={currentUser.email}
                value={currentUser.email}
                
                required
              />
            </li>
            <li>
              <label for="country">Country:</label>
              <input
                type="text"
                id="country"
                placeholder={currentUser.addressCountry}
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
                placeholder={currentUser.addressCity}
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
                placeholder={currentUser.addressStreet}
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
                placeholder={currentUser.addressNumber}
                value={addressNumber}
                onChange={(e) => setAddressNumber(e.target.value)}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleFinishEditing}>
          Finish editing
        </button>
        <button type="button" onClick={handleDeleteUser}>
          Delete user
        </button>
      </form>
    </section>
  );
};

export default User;
