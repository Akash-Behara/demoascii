import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero-section.tsx/hero";

const HomePage = () => {
  return (
    <div
      id="main-content"
      className="relative w-svw h-full font-protomonoreg opacity-0 transition-opacity"
    >
      <div className="h-svh relative bg-[#1a1a1a]">
        <Hero />
      </div>
      <div className="min-h-svh w-full">
        <Features />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
