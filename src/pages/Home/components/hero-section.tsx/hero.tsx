import Scene from "../../../../components/dummascii/Scene";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        {/* <Ascii /> */}
        <div
          id="ascii-wrapper"
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            background: "black",
          }}
        >
          <Scene />
        </div>
      </div>

      {/* Overlay UI */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex w-[340px] flex-end justify-end items-end translate-x-16 md:translate-x-80 absolute top-32 md:top-52">
            <p className="text-end text-xs">
              Long & short perpetuals, spot, stocks & commodities with your
              friends in telegram group chats or on mobile. The fastest &
              simplest way to trade on Fogo with 0 fees on market orders
            </p>
          </div>
          <div className="text-white text-2xl md:text-6xl font-medium pointer-events-auto tracking-wider">
            TRADING AT THE SPEED OF LIGHT
          </div>

          <button className="bg-white text-black rounded-md w-[320px] pointer-events-auto h-9 uppercase font-bold cursor-pointer translate-y-10">
            Start Trading
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
