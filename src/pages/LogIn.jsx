import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../images/MediSAFE(1).png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <div className="loading">
      <h3>Logging in ..</h3>
      <Skeleton />
      <Skeleton count={10} />
    </div>
  );
};

const LogIn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      localStorage.setItem("hasVisited", "true");

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Description of image" />
      </div>
      <Link to="/" className="back">
        <MdArrowBack />
      </Link>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="main-container">
            <h1 id="log-in-h1">
              Welcome, Klaus, what would you like to check?
            </h1>
            <p>
              We will connect to your International Patient summary and generate
              the suggestions for your safety.
            </p>

            <div className="button-element">
              <Link to="/new-interactions">
                <h4>Check safety on a new medication</h4>
                <p>
                  Enter a new medication to check if it interacts with any of
                  your existing medications.
                </p>
                <MdOutlineKeyboardArrowRight size={20} className="arrow" />
              </Link>
            </div>

            <div className="button-element">
              <Link to="/all-interactions">
                <h4>Check drug-drug interactions</h4>
                <p>
                  Review possible interactions between all your current
                  medications to ensure they’re safe to take together.
                </p>
                <MdOutlineKeyboardArrowRight size={20} className="arrow" />
              </Link>
            </div>
            <div className="button-element">
              <Link to="/food">
                <h4>Check food-drug interactions</h4>
                <p>
                  Check for potential food interactions with your current
                  medications to stay informed and safe.
                </p>
                <MdOutlineKeyboardArrowRight size={20} className="arrow" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LogIn;
