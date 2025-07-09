import { useRef } from "react";
import LogoPng from "../assets/logo.png";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="nav-bar"
      className="fixed top-0 left-0 w-full flex items-center justify-center z-50 font-protomonoreg opacity-0 transition-opacity"
    >
      <div
        ref={navbarRef}
        id="navbar-container"
        className="w-fit bg-[#0E0E0E] px-3 rounded-xl flex items-center gap-2 md:gap-8 h-12 shadow-lg mt-8 z-50 transition-all duration-500 overflow-hidden"
      >
        <div className="size-7 rounded-full">
          <img
            id="navbar-logo"
            src={LogoPng}
            alt="Logo"
            className="navbar-logo w-full h-full object-cover rounded-full hidden"
          />
        </div>

        <div className="flex items-center gap-4 text-sm md:text-base font-medium">
          <p className="cursor-pointer uppercase">Documents</p>
          <p className="cursor-pointer uppercase">Research</p>
        </div>

        <div className="flex items-center gap-4 font-medium translate-x-2 justify-self-end">
          <button className="px-3 py-1 rounded-lg uppercase text-[10px] md:text-[13px] text-[#D0D0D0] border-[0.4px] border-[#D0D0D0]">
            Sign in
          </button>
          <button className="uppercase text-[10px] md:text-[13px] font-medium bg-white px-3 py-1 rounded-md shadow text-black">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
