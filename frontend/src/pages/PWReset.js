import React, { useState } from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PWReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBackToLogin = () => {
    navigate("/login");
  };

  const handleResetPassword = async () => {
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage(""); // Clear any previous messages
    setIsLoading(true); // Indicate loading state

    try {
      const res = await axios.post(
        "http://localhost:8080/requestPasswordReset",
        { email } // Send email in the request body
      );
      if (res.status === 200) {
        setMessage("A reset link has been sent to your email address.");
      } else {
        setMessage("Failed to send reset link. Please try again.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false); // Remove loading state
    }
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Reset Password</h2>
        <fieldset>
          <legend>A reset link will be sent to your inbox!</legend>
          <ul>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="button" onClick={handleResetPassword} disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
        <button type="button" onClick={handleGoBackToLogin} disabled={isLoading}>
          Go Back
        </button>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
};

export default PWReset;
