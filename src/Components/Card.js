import React from "react";

function Card({ title, description, buttonText }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-700 my-3">{description}</p>
      {buttonText && (
        <button className="bg-blue-200 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-300">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Card;
