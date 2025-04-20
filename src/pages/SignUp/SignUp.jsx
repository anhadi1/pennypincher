import React from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup">
      <header className="signup__header">
      <Link to="/" className="signup__branding">
          <img src="/logo.png" alt="Pynchr logo" className="signup__logo" />
          <span className="signup__brand">Pynchr</span>
        </Link>

        {/* optional profile‑icon placeholder */}
        <img src="/avatar-placeholder.svg" alt="" className="signup__avatar" />
      </header>

      <main className="signup__card">
        <h2 className="signup__title">Create Account</h2>

        <form className="signup__form">
          <input className="signup__input" type="text" placeholder="First Name:" required />
          <input className="signup__input" type="text" placeholder="Last Name:" required />
          <input className="signup__input" type="email" placeholder="Email:" required />
          <input className="signup__input" type="password" placeholder="Password:" required />
          <input className="signup__input" type="password" placeholder="Confirm Password:" required />

          <button className="signup__btn" type="submit">Sign up</button>
        </form>

        <p className="signup__login">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </main>
    </div>
  );
}
