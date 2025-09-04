import React from "react";

function Products() {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Construction Materials</h3>
          <p>Durable and affordable building materials for residential, commercial, and industrial projects.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Office & Stationery Supplies</h3>
          <p>From paper to printers, we supply all office essentials to keep your business running smoothly.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Safety & Protective Equipment</h3>
          <p>We provide safety gear and protective wear to ensure workplace safety and compliance.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">General Supplies</h3>
          <p>Through our broad network, we source and deliver various products upon client request.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
