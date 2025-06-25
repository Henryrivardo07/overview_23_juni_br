import React from "react";
import { HERO_BACKGROUND_ICONS, Hero_Content } from "../../constant/hero";

// import icon
import heroBg from "../../assets/icons/hero-bg.png"; // Gambar background utama
import jsIcon from "../../assets/icons/js-icon.png";
import reactIcon from "../../assets/icons/react-icon.png";
import cssIcon from "../../assets/icons/css-icon.png";
import htmlIcon from "../../assets/icons/html-icon.png";
import figmaIcon from "../../assets/icons/figma-icon.png";
import tailwindIcon from "../../assets/icons/tailwind-icon.png"; // Perhatikan, ini diimpor sebagai 'flutterIcon' tapi file aslinya 'tailwind-icon.png'
// import curveDecoration from "../../assets/images/curve.svg"; // Dekorasi kurva di bagian bawah
// import bgDecoration1 from "../../assets/images/bg-decoration1.png"; // Dekorasi background tambahan
import cup from "../../assets/icons/cup.svg";
import Button from "../ui/button";
// import Button from "../ui/button";

const HeroSection = () => {
  const { badgeText, buttonLink, buttonText, description, highlight, titlePart1, titlePart2 } = Hero_Content;

  const IconSrcMap: { [key: string]: string } = {
    "/images/js-icon.png": jsIcon,
    "/images/react-icon.png": reactIcon,
    "/images/css-icon.png": cssIcon,
    "/images/html-icon.png": htmlIcon,
    "/images/figma-icon.png": figmaIcon,
    "/images/tailwind-icon.png": tailwindIcon,
  };

  const iconStyles: { [key: string]: React.CSSProperties } = {
    "/images/tailwind-icon.png": { width: "clamp(2.50rem, 5.56vw, 5.00rem)", height: "clamp(3rem, 5.56vw, 5rem)" },
    "/images/figma-icon.png": { width: "clamp(3rem, 5.13vw, 4.62rem)", height: "clamp(3rem, 5.13vw, 4.62rem)" },
    "/images/js-icon.png": { width: "clamp(3rem, 5.56vw, 5rem)", height: "clamp(3rem, 5.56vw, 5rem)" },
    "/images/html-icon.png": { width: "clamp(3.94rem, 5.71vw, 5.14rem)", height: "clamp(3.94rem, 5.71vw, 5.14rem)" },
    "/images/react-icon.png": { width: "clamp(3rem, 6.94vw, 6.25rem)", height: "clamp(3rem, 6.94vw, 6.25rem)" },
    "/images/css-icon.png": { width: "clamp(3rem, 5.49vw, 4.94rem)", height: "clamp(3rem, 5.49vw, 4.94rem)" },
  };

  return (
    <section id="hero" className=" relative flex flex-col items-center justify-center text-center text-white min-h-[852px] md:min-h-[1024px] overflow-hidden bg-cover bg-center bg-black" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="max-w-[906px] z-20 flex flex-col items-center px-4 py-16 relative">
        <span className="relative inline-block p-[2px] text-sm font-semibold mb-6 backdrop-blur-sm rounded-full">
          <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-black to-blue-300" />
          <span className="flex gap-2 z-10 relative bg-neutral-950 text-white px-4 py-2 rounded-full">
            <img src={cup} alt="" />
            {badgeText}
          </span>
        </span>

        <h1 className="text-[40px] sm:text-[56px] font-bold leading-tight mb-6 drop-shadow-lg">
          {titlePart1}
          <span className="text-primer-300">{highlight}</span>
          {titlePart2}
        </h1>
        <p className="text-md sm:text-lg text-neutral-25 mb-10 drop-shadow-md">{description}</p>

        <Button className="px-[85px]">
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>

      {HERO_BACKGROUND_ICONS.map((icon, index) => (
        <img key={index} src={IconSrcMap[icon.src]} alt={icon.alt} className={`z-10 absolute ${icon.positionClasses}`} style={iconStyles[icon.src]} />
      ))}
    </section>
  );
};
export default HeroSection;
