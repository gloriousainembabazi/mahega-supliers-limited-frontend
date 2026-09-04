// src/Pages/About/History.js
import React from "react";

import companyImage from "../../images/exported goods.jpg";
import warehouseImage from "../../images/office storage.jpg";
import agricultureImage from "../../images/agro products.jpeg";
import logisticsImage from "../../images/cars.jpg";

import "../../style/History.css";

function History() {
  return (
    <div className="history-page">

      {/* HERO */}
      <section className="history-hero">
        <div className="history-hero-overlay"></div>

        <div className="history-container history-hero-content">
          <span className="history-label">
            OUR COMPANY HISTORY
          </span>

          <h1>
            Building a Legacy of
            <span> Reliability & Excellence</span>
          </h1>

          <p>
            From humble beginnings in Kampala to becoming a trusted
            general supplier, Mahega General Suppliers Limited has
            continued to grow through quality, reliability, innovation,
            and strong relationships with our clients.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="history-story">
        <div className="history-container history-story-grid">

          <div className="history-story-image">
            <img
              src={companyImage}
              alt="Mahega General Suppliers operations"
            />
          </div>

          <div className="history-story-content">
            <span className="history-label">
              WHERE IT ALL BEGAN
            </span>

            <h2>
              From Humble Beginnings to a Growing Supply Partner
            </h2>

            <div className="history-gold-line"></div>

            <p>
              Founded in 2013 in Kampala, Uganda, Mahega General Suppliers
              Limited began with a simple but important goal: to provide
              businesses and organizations with dependable access to quality
              products and professional supply services.
            </p>

            <p>
              The company started by serving local businesses with office
              stationery and essential business supplies. As our
              understanding of customer needs grew, so did our range of
              products and services.
            </p>

            <p>
              Over the years, Mahega expanded into furniture, agricultural
              supplies, industrial equipment, cleaning products, medical
              supplies, computers and IT equipment, branding, food and
              beverages, livestock supplies, construction materials,
              hospitality supplies, and specialized procurement solutions.
            </p>

            <p>
              This growth has been driven by our commitment to understanding
              what our customers need and finding practical ways to provide
              reliable products and services.
            </p>

            <p>
              Today, Mahega continues to build on the same foundation that
              guided its early years:
              <strong>
                {" "}quality products, dependable service, honest business
                relationships, and commitment to customer satisfaction.
              </strong>
            </p>
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="history-journey">
        <div className="history-container">

          <div className="history-section-heading">
            <span className="history-label">
              OUR JOURNEY
            </span>

            <h2>
              Growing Through Experience and Commitment
            </h2>

            <div className="history-gold-line center"></div>

            <p>
              Every stage of our journey has been shaped by the changing
              needs of our clients and our commitment to providing practical,
              dependable supply solutions.
            </p>
          </div>

          <div className="history-timeline">

            <div className="history-timeline-item">
              <div className="history-year">2013</div>

              <div className="history-timeline-content">
                <h3>The Beginning</h3>

                <p>
                  Mahega General Suppliers Limited was established in
                  Kampala, Uganda, beginning its journey as a supplier of
                  office stationery and essential business supplies.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2015</div>

              <div className="history-timeline-content">
                <h3>Expansion of Product Categories</h3>

                <p>
                  The company expanded beyond stationery into office
                  furniture, workplace equipment, and selected industrial
                  supplies, allowing us to serve a wider range of customers.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2017</div>

              <div className="history-timeline-content">
                <h3>Logistics & Delivery</h3>

                <p>
                  We strengthened our logistics and delivery capabilities
                  to provide customers with more reliable coordination,
                  transportation, and order fulfilment.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2019</div>

              <div className="history-timeline-content">
                <h3>Agricultural Supply Growth</h3>

                <p>
                  Mahega expanded its agricultural and livestock supply
                  solutions, supporting farmers, agricultural enterprises,
                  institutions, and cooperatives with essential products
                  and equipment.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2021</div>

              <div className="history-timeline-content">
                <h3>Regional Supply & Export Services</h3>

                <p>
                  The company strengthened its ability to support regional
                  procurement and export-related requirements, connecting
                  customers with products from different supply sources.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2023</div>

              <div className="history-timeline-content">
                <h3>Expanding Our Client Network</h3>

                <p>
                  Mahega continued to grow its customer network while
                  expanding its product portfolio and improving procurement,
                  delivery, and customer support processes.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2025</div>

              <div className="history-timeline-content">
                <h3>Digital Transformation</h3>

                <p>
                  Mahega began strengthening its digital presence and
                  developing improved online ways for customers to discover
                  products, communicate requirements, and access supply
                  solutions more efficiently.
                </p>
              </div>
            </div>

            <div className="history-timeline-item">
              <div className="history-year">2026</div>

              <div className="history-timeline-content">
                <h3>Building the Future</h3>

                <p>
                  Today, Mahega continues to strengthen its supply network,
                  improve customer experience, expand product categories,
                  and position itself as a dependable supply partner for
                  businesses and organizations across Uganda and the wider
                  East African region.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORTING DIFFERENT SECTORS */}
      <section className="history-image-section">
        <div className="history-container history-image-grid">

          <div className="history-image-content">
            <span className="history-label">
              GROWING WITH OUR CLIENTS
            </span>

            <h2>Supporting Different Sectors</h2>

            <div className="history-gold-line"></div>

            <p>
              Our growth has been closely connected to the growth and
              changing requirements of the organizations we serve.
            </p>

            <p>
              From agricultural enterprises and construction projects to
              corporate offices, healthcare facilities, institutions,
              hospitality businesses, and industrial operations, we continue
              to provide products and services designed around real
              customer needs.
            </p>

            <p>
              This broad experience has helped us develop a practical
              understanding of procurement and supply requirements across
              different industries.
            </p>
          </div>

          <div className="history-large-image">
            <img
              src={agricultureImage}
              alt="Agricultural products and supplies"
            />
          </div>

        </div>
      </section>

      {/* WAREHOUSE */}
      <section className="history-logistics">
        <div className="history-container history-logistics-grid">

          <div className="history-logistics-image">
            <img
              src={warehouseImage}
              alt="Mahega storage and warehouse supplies"
            />
          </div>

          <div className="history-logistics-content">

            <span className="history-label">
              SUPPLY & LOGISTICS
            </span>

            <h2>Built Around Reliable Supply</h2>

            <div className="history-gold-line"></div>

            <p>
              As our product portfolio expanded, reliable storage,
              inventory coordination, sourcing, and delivery became an
              increasingly important part of our operations.
            </p>

            <p>
              We work to ensure that products are properly sourced,
              coordinated, prepared, and delivered according to customer
              requirements.
            </p>

            <div className="history-feature-list">

              <div className="history-feature">
                <span>01</span>

                <div>
                  <h3>Reliable Sourcing</h3>

                  <p>
                    Connecting customers with dependable products and
                    supply sources.
                  </p>
                </div>
              </div>

              <div className="history-feature">
                <span>02</span>

                <div>
                  <h3>Organized Supply</h3>

                  <p>
                    Coordinating orders and products according to
                    customer requirements.
                  </p>
                </div>
              </div>

              <div className="history-feature">
                <span>03</span>

                <div>
                  <h3>Efficient Delivery</h3>

                  <p>
                    Supporting dependable movement and delivery of
                    products to clients.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="history-philosophy">
        <div className="history-container history-philosophy-grid">

          <div>
            <span className="history-label">
              OUR GROWTH PHILOSOPHY
            </span>

            <h2>We Grow With Our Clients</h2>

            <div className="history-gold-line"></div>
          </div>

          <div>
            <p>
              Our growth philosophy is simple: we grow by understanding
              our customers and responding to their changing needs.
            </p>

            <p>
              Every new product category, every new service, and every
              improvement in our operations is driven by the goal of
              creating greater value for our customers.
            </p>

            <p>
              We do not simply aim to sell products. We aim to become a
              dependable partner that organizations can rely on when they
              need quality supplies, procurement support, logistics, and
              professional service.
            </p>
          </div>

        </div>
      </section>

      {/* TODAY */}
      <section className="history-today">
        <div className="history-container history-today-grid">

          <div className="history-today-image">
            <img
              src={logisticsImage}
              alt="Mahega logistics and delivery"
            />
          </div>

          <div className="history-today-content">

            <span className="history-label">
              MAHEGA TODAY
            </span>

            <h2>Continuing the Journey</h2>

            <div className="history-gold-line"></div>

            <p>
              Mahega General Suppliers Limited continues to build on its
              experience while embracing new opportunities in technology,
              procurement, logistics, and regional trade.
            </p>

            <p>
              Our focus remains on creating a dependable supply experience
              for our clients by combining quality products, responsive
              service, efficient coordination, and long-term relationships.
            </p>

            <p>
              As we look toward the future, we remain committed to becoming
              an increasingly trusted partner for organizations across
              Uganda and East Africa.
            </p>

            <div className="history-stat-grid">

              <div>
                <strong>2013</strong>
                <span>Established</span>
              </div>

              <div>
                <strong>12+</strong>
                <span>Years of Growth</span>
              </div>

              <div>
                <strong>Multiple</strong>
                <span>Supply Categories</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="history-closing">
        <div className="history-container">

          <span className="history-label">
            OUR FUTURE
          </span>

          <h2>
            A Stronger Future Built on Reliability
          </h2>

          <p>
            The Mahega story is still being written. As we continue to
            expand our capabilities and strengthen our relationships,
            our commitment remains unchanged: to provide dependable
            products, professional services, and practical supply
            solutions that help our clients succeed.
          </p>

        </div>
      </section>

    </div>
  );
}

export default History;