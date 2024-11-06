import React, { useState, useEffect } from "react";
import axios from "axios";
import illustration from "../images/5276080.jpg";
import logo from "../images/MediSAFE(1).png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Description of image" />
      </div>

      <div className="illustration-container">
        <img src={illustration} alt="Description of image" />
      </div>

      <div className="main-container">
        <h1>IPS MediSafe: Monitor your medications and interactions</h1>
        <p>
          Give recommendations regarding potentional food-drug interactions, see
          warnings about any current drug-drug interactions, and perform a quick
          safety check on a new medication.
        </p>
        <div className="button-container">
          <Link to="/generate">
            <button className="log-in">Log In &#8594;</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
