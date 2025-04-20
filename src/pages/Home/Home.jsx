import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      {/* ───────── Header ───────── */}
      <header className="home__header">
        <div className="home__logo">
          <img src="/logo-face.svg" alt="Pynchr logo" />
          <span className="home__brand">Pynchr</span>
        </div>

        <nav className="home__nav">
          <a href="/login" className="home__link">
            Log in
          </a>
          <a href="/signup" className="home__button">
            Sign up
          </a>
        </nav>
      </header>

      {/* ───────── Hero ───────── */}
      <section className="home__hero">
        <h1 className="home__question">Ready to start saving smartly?</h1>
      </section>

      {/* ───────── About ───────── */}
      <section className="home__about">
        <h2 className="home__about-title">About Pynchr</h2>

        <div className="home__emoji-row">
          <span role="img" aria-label="money bag">
            💸
          </span>
          <span role="img" aria-label="target">
            🎯
          </span>
          <span role="img" aria-label="bar chart">
            📊
          </span>
        </div>

        <div className="home__about-box">
          <div className="home__card">
            <p>
              Track your spending and income automatically to see exactly where
              your money goes
            </p>
          </div>

          <div className="home__card">
            <p>
              Set and achieve personalized financial goals, like saving, paying
              off debt, or planning for big purchases
            </p>
          </div>

          <div className="home__card">
            <p>
              Gain insights and control over your finances with real‑time
              budgets, alerts, and easy‑to‑understand reports
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
