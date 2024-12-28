import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";

const PWReset = () => {
  const navigate = useNavigate();

  const handleGoBackToLogin = () => {
    navigate("/login");
  };

  const handleResetPassword = () => {
    navigate("/login");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Reset Password</h2>
        <fieldset>
          <legend>Password Reset</legend>
          <ul>
            <li>
              <em>A reset link will be sent to your inbox!</em>
            </li>
            <li>
              <label for="email">Email:</label>
              <input type="email" id="email" required />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleResetPassword}>
          Send Reset Link
        </button>
        <button type="button" onClick={handleGoBackToLogin}>
          Go Back
        </button>
      </form>
    </section>
  );
};

export default PWReset;
