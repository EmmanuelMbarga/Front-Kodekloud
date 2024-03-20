import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CardCaroussel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div className="p-2 ">
        <Etoilecomponent />
        <h1 className="font-Poppins font-medium text-sm my-2">
          Creat for onhands preparation
        </h1>
        <p className="font-thin text-xm text-gray-500 w-[28rem] ">
          I successfully passed CKAD certification thanks to KodeKlpud. Every
          single penny...
        </p>
        <span className="font-thin text-sm text-gray-500 w-[28rem]">Yevgeniy,Febuary 2</span>
      </div>
      
     
     
    </Carousel>
  );
};

const Etoilecomponent = () => {
  return (
    <>
      <p className="w-[6rem] flex">
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="imgSertif"
          className="w-[10rem]"
        />
      </p>
    </>
  );
};
