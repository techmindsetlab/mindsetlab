import Slider from "react-slick";

interface Props {
  images: string[] | undefined;
}

function Carousel({ images }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images?.map((item) => (
          <div key={item} className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={item}
              alt="Mindsetlab Project"
              className="w-full h-full z-10 object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
