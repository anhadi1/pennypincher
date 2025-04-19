import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="content">
        <div className="circle" />
        <div className="speech-bubble">
          <h2>Welcome Friends!</h2>
          <p>Let’s get started!</p>
          <p>
            <a href="#">Log in</a> or <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;