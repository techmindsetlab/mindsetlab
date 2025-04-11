import BottomAnimation from "../animation/from-bottom";
import Divider from "../components/base/divider";
import AboutDescription from "../components/section/about/about-description";
import Capabilities from "../components/section/about/capabilities";
import MainCharacter from "../components/section/about/main-character";
import PeopleAndCulture from "../components/section/about/pnc";
import Contact from "../components/section/contact-section";

interface Props {
  scrollRotation: number;
}

const dummy = [
  {
    id: 1,
    afterHoverImage: "/dummy_img_person.png",
    beforeHoverImage: "/dummy_img_person_blured.png",
    position: "CEO",
    name: "Bobby Badjeber",
  },
  {
    id: 2,
    afterHoverImage: "/dummy_img_person.png",
    beforeHoverImage: "/dummy_img_person_blured.png",
    position: "CEO",
    name: "Rama Poerba",
  },
  {
    id: 3,
    afterHoverImage: "/dummy_img_person.png",
    beforeHoverImage: "/dummy_img_person_blured.png",
    position: "Project Manager",
    name: "Atthiyah Syarifah N",
  },
  {
    id: 4,
    afterHoverImage: "/dummy_img_person.png",
    beforeHoverImage: "/dummy_img_person_blured.png",
    position: "Project Manager",
    name: "Atthiyah Syarifah N",
  },
];

const StoriesAndCulture = ({ scrollRotation }: Props) => {
  return (
    <div className="mt-20">
      <div className="lg:px-12 px-5">
        <BottomAnimation duration={1}>
          <img src="/stories_header.svg" className="w-full h-full" />
        </BottomAnimation>

        <div className="flex z-10 relative lg:-my-[5.5rem] -my-[2rem] justify-center">
          <BottomAnimation>
            <img
              src="/and_icon.svg"
              className="w-[4rem] lg:w-[10rem] z-40 h-full"
            />
          </BottomAnimation>
        </div>
        <BottomAnimation duration={1.2}>
          <img src="/culture_header.svg" className="w-full h-full" />
        </BottomAnimation>
      </div>
      <div className="lg:px-12 px-5">
        <Divider scrollRotation={scrollRotation} />
      </div>

      {/* VIDEO PLAYER */}
      <div className="px-5 lg:px-12 rounded-md overflow-hidden">
        <video
          src="/dummy_video.mp4"
          className="w-full h-auto rounded-md"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* ABOUT SECTION */}
      <AboutDescription />
      <PeopleAndCulture data={dummy} />
      <Capabilities />
      <MainCharacter />
      <div className="mt-12">
        <Contact
          scrollRotation={scrollRotation}
          isScrollable={false}
          isAboutPage
          typography={"Let's discuss your"}
        />
      </div>
    </div>
  );
};

export default StoriesAndCulture;
