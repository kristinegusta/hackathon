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

const NewInteractions = () => {
  const [medication, setMedication] = useState(""); // State for medication input
  const [displayMedication, setDisplayMedication] = useState(""); // State for medication to display
  const [interaction, setInteraction] = useState(""); // State for interaction message
  const [isChecked, setIsChecked] = useState(false); // State to track button click
  const [isFound, setIsFound] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setMedication(e.target.value); // Update the input value
  };

  // Handle Check button click
  const handleCheckInteraction = () => {
    // Set isChecked to true when button is clicked
    setIsChecked(true);

    // Set displayMedication to the input value
    setDisplayMedication(medication);

    // Read the input value when the button is clicked
    const inputMedication = medication.trim().toLowerCase();

    if (inputMedication === "ibuprofen") {
      // Check if Ibuprofen exists in DrugDrugInteraction
      setIsFound(true);
      setInteraction(data.Ibuprofen["Prinivil (lisinopril) - ibuprofen"]);
    } else {
      setIsFound(false);
      setInteraction(
        "No interactions, safe to use, but you can always check with your doctor."
      );
    }

    // Clear the input field after checking
    setMedication("");
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
        <h1 id="log-in-h1">New medication interaction</h1>
        <p>
          Enter the name of a medication you'd like to check for potential
          interactions with your current medication.
        </p>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter medication"
            value={medication}
            onChange={handleInputChange} // Update the state as the user types
          />
          <button className="check" onClick={handleCheckInteraction}>
            Check
          </button>
        </div>

        {/* Conditionally render the food-container based on the button click */}
        {isChecked && (
          <div className="food-container">
            {displayMedication && (
              <div
                className={`interaction-message ${
                  isFound ? "not-safe" : "safe"
                }`}
              >
                <div className="food-title">
                  {isFound ? (
                    <MdOutlineWarning size={20} />
                  ) : (
                    <MdCheckCircle size={20} />
                  )}
                  <strong>{displayMedication}</strong>
                </div>
                {isFound ? (
                  <strong>Prinivil (lisinopril) - ibuprofen</strong>
                ) : (
                  <></>
                )}
                <p>{interaction}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewInteractions;
