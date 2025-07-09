import { Parallax } from "react-scroll-parallax";
import Scene from "../../../../components/dummascii/Scene";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <div
          id="ascii-wrapper"
          style={{
            width: "100svw",
            height: "100svh",
            position: "relative",
          }}
        >
          <Scene />
        </div>
      </div>

      {/* Overlay UI */}
      <Parallax speed={-10} className="relative z-10">
        <div className="absolute h-svh w-full inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full">
            {/* <div className="flex w-[340px] flex-end justify-end items-end translate-x-16 md:translate-x-[360px] absolute top-32 md:top-48">
              <p id="hero-subText" className="hero-subTex text-end text-xs">
                Long & short perpetuals, spot, stocks & commodities with your
                friends in telegram group chats or on mobile. The fastest &
                simplest way to trade on Fogo with 0 fees on market orders
              </p>
            </div> */}
            <div
              id="hero-heading"
              className="hero-heading text-white text-6xl font-medium pointer-events-auto tracking-wider -translate-y-20 text-center font-protomonobold"
            >
              TRADING AT THE SPEED OF LIGHT
            </div>

            <button
              id="hero-btn"
              className="hero-btn bg-white text-black rounded-md w-[320px] pointer-events-auto h-9 uppercase font-bold cursor-pointer"
            >
              Join waitlist
            </button>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Hero;
