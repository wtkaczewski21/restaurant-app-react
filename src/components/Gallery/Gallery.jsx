import React, { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
];

function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-content">
        <SubHeading title="Our Food" />
        <h2 className="custom-heading">Photo Gallery</h2>
        <p className="gallery-content-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          alias corporis illum dolores tenetur pariatur numquam nam beatae,
          maiores quia, doloremque neque voluptatibus veniam. Quasi saepe illo
          natus molestiae architecto.
        </p>
        <button type="button" className="custom-button">
          View More
        </button>
      </div>
      <div className="gallery-images">
        <div className="gallery-images-photos" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="gallery-images-card"
              key={`gallery-image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
