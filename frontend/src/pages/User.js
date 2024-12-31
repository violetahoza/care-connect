import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Product.css";
import { currentUser } from "../utils/Store";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const [userName, setUsername] = React.useState(currentUser.userName);
  const [userPassword, setUserPassword] = React.useState(currentUser.userPassword);
  const [firstName, setFirstName] = React.useState(currentUser.firstName);
  const [lastName, setLastName] = React.useState(currentUser.lastName);
  const [addressCountry, setAddressCountry] = React.useState(currentUser.addressCountry);
  const [addressCity, setAddressCity] = React.useState(currentUser.addressCity);
  const [addressStreet, setAddressStreet] = React.useState(currentUser.addressStreet);
  const [addressNumber, setAddressNumber] = React.useState(currentUser.addressNumber);
  const [userId, setUserId] = React.useState(currentUser.id);
  const [isAdmin, setIsAdmin] = React.useState(currentUser.isAdmin);
  const [isCustomer, setIsCustomer] = React.useState(currentUser.isCustomer);
  const [isEmployee, setIsEmployee] = React.useState(currentUser.isEmployee);
  const [isDelivery, setIsDelivery] = React.useState(currentUser.isDelivery);
  const [isProvider, setIsProvider] = React.useState(currentUser.isProvider);

  const handleBack = () => {
    navigate("/view-users");
  };

  const handleFinishEditing = async () => {
    setIsLoading(true);
    try {
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
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      return;
    }
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:8080/deleteUser/${currentUser.id}`);
      navigate("/view-users");
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="product">
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
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
        <button type="button" onClick={handleDeleteUser}>
          {isLoading ? "Deleting..." : "Delete User"}
        </button>
        <button type="button" onClick={handleBack}>
          ← Back to Users
        </button>
      </form>
    </section>
  );
};

export default User;
