import { useEffect, useRef } from "react";
import gsap, { TimelineMax, TweenMax } from "gsap";
import LogoPng from "../../assets/logo.png";

export default function AnimatedLogo() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const mainContent = document.getElementById("main-content");
    const navBar = document.getElementById("nav-bar");
    const navBarContainer = document.getElementById("navbar-container");
    const navbarLogo = document.querySelector(".navbar-logo");

    const left = new TimelineMax();

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        // Hide animated logo after sequence ends
        logo!.style.display = "none";
        if (navbarLogo) navbarLogo.classList.add("fade-in");
      },
    });

    // Initial position in center of screen
    gsap.set(logo, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      zIndex: 1000,
      scale: 3,
    });

    tl.to(logo, { duration: 2, opacity: 1, scale: 3 }) // stay visible 2s
      .to(logo, {
        yPercent: -1240, // move to top center
        scale: 1.5,
        duration: 1.2,
      })
      .to(logo, {
        scale: 1,
        opacity: 1,
        // opacity: 0,
        onStart: () => {
          // ✅ Fade in content while sliding left
          if (mainContent) {
            gsap.to(mainContent, { opacity: 1, duration: 1 });
          }
          if (navBar) {
            gsap.to(navBar, { opacity: 1, duration: 1 });
          }
          if (navBarContainer) {
            left
              .from(navBarContainer, { width: 0 })
              .to(navBarContainer, { left: 400, width: 505, opacity: 1 });
          }
        },
      });
  }, []);

  return (
    <div
      ref={logoRef}
      className="text-white text-2xl font-mono tracking-wide pointer-events-none"
    >
      <img src={LogoPng} alt="logo" className="w-7 h-7" />
    </div>
  );
}
