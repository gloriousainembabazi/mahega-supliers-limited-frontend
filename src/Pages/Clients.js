import React from "react";

function Clients() {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Clients & Partners</h2>
      <p className="text-lg text-gray-700 mb-4">
        We are proud to serve businesses, organizations, and individuals who trust us as their supply partner.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">Client Logo 1</div>
        <div className="bg-white shadow-md rounded-lg p-6">Client Logo 2</div>
        <div className="bg-white shadow-md rounded-lg p-6">Client Logo 3</div>
        <div className="bg-white shadow-md rounded-lg p-6">Client Logo 4</div>
      </div>
    </div>
  );
}

export default Clients;
