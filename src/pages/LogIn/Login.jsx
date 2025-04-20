import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <Link to="/" className="signup__branding">
          <img src="/logo.png" alt="Pynchr logo" className="signup__logo" />
          <span className="login__brand">Pynchr</span>
        </Link>

      <main className="login__card">
        <h2 className="login__title">Welcome Back!</h2>

        <form className="login__form">
          <input
            className="login__input"
            type="email"
            placeholder="Email:"
            required
          />
          <input
            className="login__input"
            type="password"
            placeholder="Password:"
            required
          />
          <button className="login__btn" type="submit">
            Log in
          </button>
        </form>

        <p className="login__signup">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </main>
    </div>
  );
}