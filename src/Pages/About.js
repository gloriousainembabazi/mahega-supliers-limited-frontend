import React  from 'react';
import '../style/About.css';



// ✅ IMPORT ALL IMAGES

import goatRearingImg from '../images/goat rearing.jpg';
import exportedGoodsImg from '../images/exported goods.jpg';

import pipeImg from '../images/pipes.jpg';
import raisingVillageImg from '../images/raising village.png';
import healthPartnersImg from '../images/health parterners.png';
import ugandaPoliceImg from '../images/uganda police.jpeg';
import vivoImg from '../images/vivo energy.png';
import ugandaBreweriesImg from '../images/Uganda breweries.jpeg';
import contactImg from '../images/contact.avif';
import Glorious from '../images/vivo energy.png';

// Main About Page Component

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Mahega General Supplies Ltd</h1>
          <p>Trusted Partner in General Trade & Procurement</p>
        </div>
      </section>

      {/* About Company Section  */}
      <section className="about-company">
        <div className="container flex-row">
          <div className="image-box">
        
            
          </div>
          <div className="text-box">
            <h2>About the Company</h2>
            <p>
              Mahega General Supplies Ltd is a trusted and reliable partner in the field of general trade, specializing in both public and private procurements. We are committed to delivering quality products, competitive pricing and efficient services that meet and exceed the expectations of our clients. <strong>We don’t just provide supplies — we build lasting relationships.</strong>
            </p>
            <p>
              Our strength lies in our extensive procurement network, professional staff and a proven track record of serving diverse industries. With integrity, transparency and innovation at the core of our operations, we position ourselves as a leading supplier and partner of choice in Uganda and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="container flex-row">
          <div className="content-box">
            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>To be the most reliable and competitive supplier of goods and services in the region.</p>
            </div>
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>To deliver quality products and services through efficient procurement systems and strategic partnerships. Beyond providing supplies, we cultivate enduring partnerships built on trust, reliability and mutual growth.</p>
            </div>
          </div>
          <div className="image-box">
            <img
              src={goatRearingImg}
              alt="Vision and mission guiding Mahega's success"
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container flex-container">
          <div className="image-column">
            <img 
              src={exportedGoodsImg}
              alt="Mahega Core Values Illustration"
              className="core-values-image"
            />
          </div>
          <div className="values-column">
            <h2>Core Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>1. Integrity</h3>
              </div>
              <div className="value-item">
                <h3>2. Professionalism</h3>
              </div>
              <div className="value-item">
                <h3>3. Innovation</h3>
              </div>
              <div className="value-item">
                <h3>4. Timeliness</h3> {/* Fixed typo from "Timelines" */}
              </div>
              <div className="value-item">
                <h3>5. Customer-Centric Service</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Mahega?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>One-Stop Procurement</h3>
              <p>Get everything you need from a single trusted source — saving you time and reducing complexity.</p>
            </div>
            <div className="benefit-card">
              <h3>Quality Assurance</h3>
              <p>We guarantee strict compliance with industry standards and specifications for every product.</p>
            </div>
            <div className="benefit-card">
              <h3>On-Time Delivery</h3>
              <p>With flexible logistics and reliable timelines, your supplies arrive when you need them.</p>
            </div>
            <div className="benefit-card">
              <h3>Strategic Partnerships</h3>
              <p>We collaborate with top local and international firms to bring you the best solutions.</p>
            </div>
            <div className="benefit-card">
              <h3>Customer-Focused</h3>
              <p>Tailor-made solutions designed around your unique needs — because your success is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="products-services">
        <div className="container product-section-layout">
          <div className="product-image-wrapper">
            <img 
              src={pipeImg} 
              alt="Range of products and services offered by Mahega General Supplies"style={{marginTop:"100px" ,height: '700%', width: '100%'}}
              className="product-main-img"
            />
          </div>
          <div className="product-content-wrapper">
            <h2>What We Offer</h2>
            <p className="section-subtitle">Comprehensive supply solutions tailored to your industry needs.</p>
            <div className="product-items-column">
              <div className="product-item">Assorted Stationery & Office Supplies</div>
              <div className="product-item">Computers, Printers & ICT Consumables</div>
              <div className="product-item">Furniture & Fittings</div>
              <div className="product-item">Cleaning Materials & Consumables</div>
              <div className="product-item">Agricultural & Industrial Supplies</div>
              <div className="product-item">Beverages & Food Supplies</div>
              <div className="product-item">Medical Consumables & PPE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-intro">
            Behind every successful delivery is a team of dedicated professionals committed to excellence, integrity, and customer satisfaction.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="https://via.placeholder.com/300x300?text=CEO" alt="CEO" />
              </div>
              <h4>Glorious</h4>
              <p className="member-role">Chief Executive Officer</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="https://via.placeholder.com/300x300?text=Procurement+Head" alt="Procurement Head" />
              </div>
              <h4>Nazifa </h4>
              <p className="member-role">Head of Procurement</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                 <div className="image-box">
            <img
              src={Glorious}
              alt="Logistic manager"
              className="section-image"
            />
          </div>
              
              </div>
              <h4>Robert Brown</h4>
              <p className="member-role">Logistics Manager</p>
            </div>
          </div>
          <p className="team-cta">
            <em>Meet the people who make it all possible — passionate, professional, and always at your service.</em>
          </p>
        </div>
      </section>

      {/* Our Clients & Partners Section — COLUMN LAYOUT */}
      <section className="clients-partners">
        <div className="container">
          <h2>Our Clients & Partners</h2>
          <p className="section-intro">
            We proudly collaborate with leading organizations across public, private, and nonprofit sectors in Uganda and beyond.
          </p>
          <div className="partners-row">
            <div className="partner-item">
              <div className="partner-logo">
                <img src={healthPartnersImg} alt="Health Partners Uganda" />
              </div>
              <h4>Health Partners</h4>
            </div>
            <div className="partner-item">
              <div className="partner-logo">
                <img src={raisingVillageImg} alt="Raising the Village" />
              </div>
              <h4>Raising the Village</h4>
            </div>
            <div className="partner-item">
              <div className="partner-logo">
                <img src={ugandaPoliceImg} alt="Uganda Police Force" />
              </div>
              <h4>Uganda Police Force</h4>
            </div>
            <div className="partner-item">
              <div className="partner-logo">
                <img src={vivoImg} alt="Vivo Uganda" />
              </div>
              <h4>Vivo</h4>
            </div>
            <div className="partner-item">
              <div className="partner-logo">
                <img src={ugandaBreweriesImg} alt="Uganda Breweries Limited" />
              </div>
              <h4>Uganda Breweries Ltd</h4>
            </div>
          </div>
          <div className="partner-cta">
            <p><em>Partner with us — and experience reliability, quality, and excellence in procurement.</em></p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="image-box centered small">
            <img src={contactImg} alt="Mahega General Supplies office location and contact information" className="contact-image" />
          </div>
          <h2>Get in Touch with Us</h2>
          <div className="contact-info">
            <p><strong>Office Address:</strong> Colville Street - Airways House, Kampala, Uganda. P.O Box 176570</p>
            <p><strong>Telephone:</strong> +256 702 850 154, +256 785 656 360, +256 779 170 014, +256 775 996 499</p>
            <p><strong>Email:</strong> <a href="mailto:mahega.gs@gmail.com">mahega.gs@gmail.com</a></p>
            <button className="contact-btn">Contact Us Today</button>
          </div>
  
          
        </div>
      </section>
       

      {/* Privacy Policy Section */}
      <section className="privacy-policy">
        <div className="container">
          <h3>Privacy Policy</h3>
          <p>
            At Mahega General Supplies Ltd, we respect your privacy and are committed to protecting your personal data. 
            Any information you provide will be used solely for the purpose of fulfilling your procurement needs and 
            improving our services. We do not share your data with third parties without your consent.
          </p>
          <p>
            For more details, please contact us at <a href="mailto:mahega.gs@gmail.com">mahega.gs@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;