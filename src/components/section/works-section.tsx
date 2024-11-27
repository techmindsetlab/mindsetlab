import { images } from "../../helper/dummy";
import Button from "../base/button";
import Title from "../base/title";

const Works = () => {
  return (
    <div>
      <Title
        className="text-white text-xl lg:text-5xl"
        text="Tolong diganti copy headline ‘all works’ yang keren banget._"
      />
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
        {images.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className={`relative ${image.isWide ? "lg:col-span-2" : ""} ${
                  image.height
                } ${image.hiddenOnMobile ? "hidden sm:block" : ""}`}
              >
                {!image.hasText && (
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={image.src}
                    alt={`Gallery Image ${colIndex}-${imgIndex}`}
                  />
                )}

                {image.hasText && (
                  <div className=" bg-[#1e1e1e] text-[#fafafa] rounded-lg">
                    <p className="lg:text-[15px] text-[11px]">{image.text}</p>
                    <Button
                      variant="secondary"
                      isEnabledArrow
                      size="small"
                      text={image.buttonLabel || ""}
                      className="mt-2 font-neue-corp-thin py-1 w-full px-3"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
