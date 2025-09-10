import React from "react";
<<<<<<< HEAD
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
=======

function Card({ title, description, buttonText }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-700 my-3">{description}</p>
      {buttonText && (
        <button className="bg-blue-200 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-300">
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Card;
