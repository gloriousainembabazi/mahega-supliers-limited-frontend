import React from "react";
<<<<<<< HEAD
import "../style/Gallary.css"; // Make sure the path is correct
=======
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
<<<<<<< HEAD
  "/images/cattle rearing.jpg",
  "/images/cars.jpg",
  "/images/board.jpg",
=======
  "/src/images/cattle rearing.jpg",
  "/src/images/cars.jpg",
  "/src/imanges/board.jpg",
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
];

const Gallery = () => {
  return (
<<<<<<< HEAD
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
=======
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded shadow-lg">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
