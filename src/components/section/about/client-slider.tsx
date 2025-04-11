"use client";

import Slider from "react-slick";
import Paragraph from "../../base/paragraph";

type ClientType = {
  image: string;
  name: string;
  description: string;
};

const ClientSlider = ({ client }: { client: ClientType[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="px-6  h-full" {...settings}>
      {client.map((item, idx) => (
        <div key={idx} className="px-2 w-full lg:px-4">
          <div className="bg-gradient-to-br w-full from-[#FFDD00]/10 via-white/20 to-[#FE00BF]/10 backdrop-blur-lg rounded-[16px] shadow-md grid items-center justify-center h-full">
            <div className="bg-white/10 backdrop-blur-md lg:p-4 p-2 rounded-[16px] w-full h-full flex flex-col  justify-center">
              <img src={item.image} className="w-12 lg:w-[7rem]" />
              <Paragraph
                text={item.name}
                className="text-white lg:text-[1.5rem] lg:pt-2 font-neue-machina-bold mt-2"
              />
              <Paragraph
                text={item.description}
                size="extrasmall"
                className="font-neue-corp-thin lg:pt-2 lg:text-[16px] lg:leading-[16px] text-white"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ClientSlider;
