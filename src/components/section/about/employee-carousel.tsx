import Slider from "react-slick";

interface Props {
  data: {
    id: number;
    afterHoverImage: string;
    beforeHoverImage: string;
    position: string;
    name: string;
  }[];
}

function EmployeeCarousel({ data }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <div className="slider-container lg:px-12 relative overflow-x-hidden">
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="lg:px-4 px-1">
            <div className="relative w-full overflow-hidden rounded-md group">
              <img
                src={item.beforeHoverImage}
                alt="Employee"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-md"
              />
              <img
                src={item.afterHoverImage}
                alt="Employee Hover"
                className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
              />

              <div className="absolute inset-0 flex items-center justify-center text-white text-xl transition-all duration-300">
                <span className="absolute lg:text-[20px] lg:leading-[20px] text-[14px] leading-[14px] w-[60%] text-center opacity-100 group-hover:opacity-0 transition-opacity font-neue-machina-regular duration-300">
                  {item.position}
                </span>

                <span className="absolute lg:text-[24px] lg:leading-[30px] bottom-0 left-0 p-2 lg:p-4 w-[80%] font-neue-machina-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default EmployeeCarousel;
