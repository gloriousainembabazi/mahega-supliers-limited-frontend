import React from "react";
import "../style/client.css";
import RaisingvillageImg from '../images/raising village.png';
import healthPartnersImg from '../images/health partners 2.png';
import PoliceforceImg from '../images/uganda police 2.png';
import vivoImg from '../images/vivo energy.png';
import ugandabreweriesImg from '../images/Uganda breweries.jpeg';

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
                                <div className="partner-logo">
                                                <img src={RaisingvillageImg} alt="Raising village" />
                                              </div>
                                              <h4>Raising the village</h4>
                                            </div>
                                

                            <div className="client-logo">
                                <div className="partner-logo">
                <img src={ugandabreweriesImg} alt="Uganda Breweries" />
              </div>
              <h4>ugandaBreweriesImg</h4>
            </div>

                            <div className="client-logo">
                                <div className="partner-logo">
                                                <img src={vivoImg} alt="Vivo Energy" />
                                              </div>
                                              <h4>Vivo Energy</h4>
                                            </div>
                                
                            <div className="client-logo">
                                <div className="partner-logo">
                <img src={PoliceforceImg} alt="Police Force" />
              </div>
              <h4>Police Force</h4>
            </div>
                        
                            <div className="client-logo">
                                <div className="partner-logo">
                                                <img src={healthPartnersImg} alt="Health Partners" />
                                              </div>
                                              <h4>Health Partners</h4>
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

export default Clients;
