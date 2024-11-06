import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../images/MediSAFE(1).png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdCheckCircle } from "react-icons/md";
import { MdOutlineWarning } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../backend/data.json";

const Food = () => {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Description of image" />
      </div>
      <Link to="/generate" className="back">
        <MdArrowBack />
      </Link>

      <div className="main-container">
        <h1 id="log-in-h1">Food-Drug Interactions</h1>

        <div className="food-container">
          {Object.entries(data.FoodInteraction).map(
            ([drug, { interaction, safe }]) => (
              <div key={drug} className={safe ? "safe" : "not-safe"}>
                <div className="food-title">
                  {safe ? (
                    <MdCheckCircle size={20} />
                  ) : (
                    <MdOutlineWarning size={20} />
                  )}
                  <strong>{drug}</strong>
                </div>

                <p>{interaction}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;
