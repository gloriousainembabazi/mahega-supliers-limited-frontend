import React from "react";
<<<<<<< HEAD
import "../style/client.css";

const Clients = () => {
    return (
        <div>
            <main>
                {/* Clients Section */}
                <section id="clients" className="clients-section">
                    <div className="clients-container">
                        <h2 className="section-title">Our Valued Clients & Partners</h2>
                        <div className="clients-grid">
                            <div className="client-logo">
                                <img src="https://placehold.co/150x80/e5e7eb/6b7280?text=Raising+The+Village" alt="Raising The Village" />
                            </div>
                            <div className="client-logo">
                                <img src="https://placehold.co/150x80/e5e7eb/6b7280?text=Uganda+Breweries" alt="Uganda Breweries Limited" />
                            </div>
                            <div className="client-logo">
                                <img src="https://placehold.co/150x80/e5e7eb/6b7280?text=Vivo+Energy" alt="Vivo Energy" />
                            </div>
                            <div className="client-logo">
                                <img src="https://placehold.co/150x80/e5e7eb/6b7280?text=Uganda+Police+Force" alt="Uganda Police Force" />
                            </div>
                            <div className="client-logo">
                                <img src="https://placehold.co/150x80/e5e7eb/6b7280?text=HealthPartners" alt="HealthPartners" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact-section">
                    <div className="contact-container">
                        <h2 className="section-title">Get in Touch</h2>
                        <div className="contact-grid">
                            <div className="contact-card">
                                <h3 className="contact-title">Contact Information</h3>
                                <ul className="contact-list">
                                    <li>
                                        <span>P.O. Box 176570, Kampala, Uganda</span>
                                    </li>
                                    <li>
                                        <span>+256 785 656 360, +256 779 170 014, +256 775 996 499</span>
                                    </li>
                                    <li>
                                        <span>mahega.gs@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

                </div>
      

    );
};
=======

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
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

export default Clients;
