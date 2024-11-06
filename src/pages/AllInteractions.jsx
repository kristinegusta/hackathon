import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../images/MediSAFE(1).png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineWarning } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../backend/data.json";

const AllInteractions = () => {
  const [openMajorIndex, setOpenMajorIndex] = useState(null);
  const [openModerateIndex, setOpenModerateIndex] = useState(null);

  const toggleMajorInteraction = (index) => {
    setOpenMajorIndex(openMajorIndex === index ? null : index);
  };

  // Toggle Moderate interaction visibility
  const toggleModerateInteraction = (index) => {
    setOpenModerateIndex(openModerateIndex === index ? null : index);
  };
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Description of image" />
      </div>
      <Link to="/generate" className="back">
        <MdArrowBack />
      </Link>

      <div className="main-container">
        <h1 id="log-in-h1">Drug-Drug Interactions</h1>
        <div className="food-container">
          {data.DrugDrugInteraction.Major.map((interaction, index) => (
            <div key={index} className="major">
              <div
                className="food-title"
                onClick={() => toggleMajorInteraction(index)}
              >
                <MdOutlineWarning />
                <strong>{Object.keys(interaction)[0]}</strong>
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className="arrow-drugs"
                />
              </div>
              <div
                className={`interaction-details ${
                  openMajorIndex === index ? "open" : ""
                }`}
              >
                {Object.values(interaction)[0]}
              </div>
            </div>
          ))}

          {data.DrugDrugInteraction.Moderate.map((interaction, index) => (
            <div key={index} className="not-safe">
              <div
                className="food-title"
                onClick={() => toggleModerateInteraction(index)}
              >
                <strong>{Object.keys(interaction)[0]}</strong>
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className={`arrow-drugs ${
                    openModerateIndex === index ? "open" : ""
                  }`}
                />
              </div>
              <div
                className={`interaction-details ${
                  openModerateIndex === index ? "open" : ""
                }`}
              >
                {Object.values(interaction)[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInteractions;
