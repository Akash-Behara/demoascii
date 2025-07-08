import asciiEarthPng from "../../../assets/ascii-earth-2.png";
import logoDarkPng from "../../../assets/logo-dark.png";

const Footer = () => {
  return (
    <div className="bg-[#f1f1f1] min-h-[760px] pt-20">
      <div className="mx-10 md:mx-20 flex flex-wrap md:flex-nowrap justify-between text-black">
        <div>
          <div className="flex items-center text-3xl gap-1">
            <img src={logoDarkPng} alt="logo" className="size-8" />
            HIKARI
          </div>
          <div className="text-2xl">
            SOME GOOD LINES ABOUT THE PRODUCT <br /> YUP IT'S GOOD.
          </div>
        </div>
        <div className="flex gap-10 mt-20 md:mt-0">
          <div className="col-span-1 font-inter">
            <h2 className="mb-2 font-inter font-medium text-[18px]">Support</h2>
            <p>Support</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="col-span-1 font-inter">
            <h2 className="mb-2 font-inter font-medium text-[18px]">Legal</h2>
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="col-span-1 font-inter">
            <h2 className="mb-2 font-inter font-medium text-[18px]">Explore</h2>
            <p>Blogs & resources</p>
            <p>About us</p>
          </div>
          <div className="col-span-1 font-inter">
            <h2 className="mb-2 font-inter font-medium text-[18px]">
              Feedback
            </h2>
            <p>Feedback</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-500">
        <img
          src={asciiEarthPng}
          alt="ascii-earth"
          className="w-full object-cover mt-10"
        />
      </div>
    </div>
  );
};

export default Footer;
