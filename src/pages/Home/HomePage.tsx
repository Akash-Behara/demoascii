import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero-section.tsx/hero";

// 232323

const HomePage = () => {
  return (
    <div
      id="main-content"
      className="relative w-svw h-full font-protomonoreg opacity-0 transition-opacity"
    >
      <div className="h-svh relative bg-[#1a1a1a]">
        {/* <div className="absolute top-0 left-0 inset-0 h-svh w-svh bg-[#232323]/20 z-10 pointer-events-none"></div>
        <div
          id="hero-overlay"
          className="absolute top-0 left-0 inset-0 h-svh w-svh bg-[#232323]/30 z-10 pointer-events-none"
        >
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[52%]"
          ></div>
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[64%]"
          />
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[72%]"
          ></div>
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[80%]"
          ></div>
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[84%]"
          ></div>
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[88%]"
          ></div>
          <div
            id="hero-overlay-strips"
            className=" hero-overlay-strips h-6 w-full bg-[#232323]/10 absolute top-[91%]"
          ></div>
        </div> */}
        <Hero />
      </div>
      <div className="w-full">
        <Features />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
