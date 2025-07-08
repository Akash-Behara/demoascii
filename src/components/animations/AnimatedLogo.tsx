import gsap, { TimelineMax } from "gsap";
import { useEffect, useRef } from "react";
import LogoPng from "../../assets/logo.png";

export default function AnimatedLogo() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const mainContent = document.getElementById("main-content");
    const navBar = document.getElementById("nav-bar");
    const navBarContainer = document.getElementById("navbar-container");
    const heroOverlay = document.getElementById("hero-overlay");
    const heroHeading = document.getElementById("hero-heading");
    const navbarLogo = document.querySelector(".navbar-logo");
    const heroOverlayStrips = document.querySelectorAll(".hero-overlay-strips");

    const tlm = new TimelineMax();
    const overlay = new TimelineMax();

    const tl = gsap.timeline({
      onComplete: () => {
        // Hide animated logo after sequence ends
        // logo!.style.display = "none";
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
      rotate: -100,
    });

    tl.to(logo, { duration: 2, opacity: 1, scale: 3 }) // stay visible 2s
      .to(logo, {
        top: "5%",
        // yPercent: -1240, // move to top center
        scale: 1.5,
        duration: 1.2,
        rotate: -50,
      })
      .to(logo, {
        scale: 1,
        opacity: 1,
        rotate: 0,
        onStart: () => {
          // ✅ Fade in content while sliding left
          if (mainContent) {
            gsap.to(mainContent, { opacity: 1, duration: 1 });
          }
          if (navBar) {
            gsap.to(navBar, { opacity: 1, duration: 1 });
          }
          if (navBarContainer) {
            tlm.from(navBarContainer, { width: 0 }).to(navBarContainer, {
              left: 400,
              width: 505,
              opacity: 1,
              backgroundColor: "#1C1C1C",
            });
          }
          if (heroOverlay) {
            overlay.set(heroOverlay, { y: -1000 });
            overlay.to(heroOverlay, {
              y: 0,
              duration: 1.2,
              delay: 1.2,
              ease: "power2.out",
            });
          }

          if (heroOverlayStrips) {
            gsap.to(heroOverlayStrips, {
              opacity: 0,
              duration: 1.2,
              delay: 2,
            });
          }

          if (heroHeading) {
            gsap.fromTo("hero-heading", { y: -200 }, { y: 0 });
          }
        },
      })
      .to(logo, {
        xPercent: -858,
        marginTop: 4,
        duration: 0.8,
        onComplete: () => {
          gsap.to(navbarLogo, {
            display: "flex",
            delay: 10,
          });
          gsap.to(logo, {
            opacity: 0,
            display: "hidden",
            delay: 10,
          });
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
