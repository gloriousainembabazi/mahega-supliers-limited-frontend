import React from "react";

function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
      <p className="mb-6 text-lg">We’d love to hear from you. Reach out for inquiries or partnerships.</p>

      <form className="grid gap-4 max-w-lg mx-auto bg-gray-100 p-6 rounded-xl shadow-md">
        <input type="text" placeholder="Name" className="p-3 rounded-lg border" />
        <input type="email" placeholder="Email" className="p-3 rounded-lg border" />
        <input type="tel" placeholder="Phone" className="p-3 rounded-lg border" />
        <textarea placeholder="Message" className="p-3 rounded-lg border" rows="4"></textarea>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
