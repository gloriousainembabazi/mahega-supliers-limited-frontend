import React from "react";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/src/images/cattle rearing.jpg",
  "/src/images/cars.jpg",
  "/src/imanges/board.jpg",
];

const Gallery = () => {
  return (
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
