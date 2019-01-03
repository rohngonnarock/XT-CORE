import React from "react";

const Banner = ({ banners }) => {
  let slideIndex = 1;

  const plusSlides = n => {
    showSlides((slideIndex += n));
  };

  const currentSlide = n => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n = 1) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };
  return (
    <div className="banner" onLoad={showSlides}>
      <div className="slideshow-container">
        {banners &&
          banners.map(banner => {
            return (
              <div className="mySlides fade" key={banner.id}>
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </div>
            );
          })}

        <a
          href="/"
          className="prev"
          onClick={e => {
            e.preventDefault();
            plusSlides(-1);
          }}
        >
          &#10094;
        </a>
        <a
          href="/"
          className="next"
          onClick={e => {
            e.preventDefault();
            plusSlides(1);
          }}
        >
          &#10095;
        </a>
      </div>

      <div className="center">
        {banners &&
          banners.map(banner => {
            return (
              <span
                key={banner.id}
                className="dot"
                onClick={() => {
                  currentSlide(banner.order);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Banner;
