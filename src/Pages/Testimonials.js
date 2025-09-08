import React from "react";

const testimonials = [
  { name: "John Doe", message: "Excellent service and quality materials!" },
  { name: "Jane Smith", message: "Reliable supplier for all our projects." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <p className="mb-4">"{t.message}"</p>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
