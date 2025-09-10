import React from "react";
import "./Card.css"; 

function Card({ title, description, buttonText, image }) {
  return (
    <div className="card">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="card-image"
        />
      )}

      {/* Text */}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      {/* Button */}
      {buttonText && (
        <button className="card-button">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Card;
