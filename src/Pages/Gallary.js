import React from "react";
import "../style/Gallary.css";


import stationaryImg from "../images/statinary.jpg"; 
import plywoodImg from "../images/plywood.jpg";
import pipesImg from "../images/pipes.jpg";
import cattleImg from "../images/cattle rearing.jpg";
import carsImg1 from "../images/cars.jpg";
import chairsImg from "../images/chairs.jpg";
import boardsimg from "../images/boards.jpg";
import boxmaterialimg from "../images/box materials.jpg";
import cattle2img from "../images/cattle 2 rearing.jpg";
import compoundImg from  "../images/compound tables.jpg";
import exportedgoodsimg from "../images/exported goods.jpg";
import goat2img from "../images/goat 2 rearing.jpg";
import goatimg from "../images/goat rearing.jpg";
import hotelimg from "../images/hotel tables.jpg";
import metalictablesimg from "../images/metalic tables.jpg";
import officematerial2img from "../images/office material 2.jpg";
import officetablesimg from "../images/office tables.jpg";
import officeuseimg from "../images/office use.jpg";
import poshomakingimg from "../images/posho making.jpg";
import rearingimg from "../images/cattle rearing.jpg";
import tablesimg from "../images/office tables.jpg";
import writingImg from "../images/books and pens.jpeg";
import paperImg from '../images/books.jpeg';
import deskAccessoriesImg from '../images/office desk.jpeg';
import printImg from '../images/printer.jpeg';
import officeChairsImg from '../images/office material 2.jpg';
import officeDesksImg from '../images/office desk chair.jpeg';
import receptionImg from '../images/reception chair.jpeg';
import trainingImg from '../images/mobile.jpeg';
import cafeImg from '../images/cafe table 2.webp';
import foldingImg from '../images/folding chair.jpeg';
import metroImg from '../images/metro 1.jpeg';
import storageImg from '../images/office storage.jpg';


const galleryImages = [
stationaryImg,
  plywoodImg,
  pipesImg,
  cattleImg,
  carsImg1,
  chairsImg,
  boardsimg,
  boxmaterialimg,
  cattle2img,
  compoundImg,
  exportedgoodsimg,
  goat2img,
  goatimg,
  hotelimg,
  metalictablesimg,
  officematerial2img,
  officetablesimg,
  officeuseimg,
  poshomakingimg,
  rearingimg,
  tablesimg,
   writingImg,
  paperImg, 
   deskAccessoriesImg, 
    printImg, 
    officeChairsImg, 
    officeDesksImg,
    receptionImg, 
    trainingImg, 
    cafeImg, 
    foldingImg, 
    metroImg, 
    storageImg, 
 

];

const Gallary = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="gallery-image"
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;