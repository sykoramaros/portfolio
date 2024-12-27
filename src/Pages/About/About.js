import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  // Funkce pro přepnutí stavu karty (flip)
  const handleClick = () => setFlipped(!flipped);

  return (
    <div className="about-page">
      <div className="about-card-container">
        <div
          className="about-card"
          onClick={handleClick} // Flip karta při kliknutí
          style={{
            // perspective: "1000px", // Aby se efekt flipu vykonal v 3D prostoru
          }}
        >
          <div
            className={`about-card-inner ${flipped ? "flipped" : ""}`}
            style={{
              transition: "transform 0.6s", // Hladký přechod při otočení
              transformStyle: "preserve-3d", // Udržuje 3D efekt
            }}
          >
            <div className="about-card-front">
              <h3>Front Side</h3>
              <p>This is the front of the card.</p>
            </div>
            <div className="about-card-back">
              <h3>Back Side</h3>
              <p>This is the back of the card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;