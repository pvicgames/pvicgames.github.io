//import React from 'react'
import circlePink from "../assets/img/artius/logo_parts/circle_pink.png";
import quadBlue from "../assets/img/artius/logo_parts/quad_blue.png";
import quadGreen from "../assets/img/artius/logo_parts/quad_green.png";
import triangleYellow from "../assets/img/artius/logo_parts/triangle_yellow.png";
import circleBlue from "../assets/img/artius/logo_parts/circle_blue.png";
import triangleOrange from "../assets/img/artius/logo_parts/triangle_orange.png";
import brushStroke from "../assets/img/artius/logo_parts/brush_stroke.png";
import letters from "../assets/img/artius/logo_parts/letters.png";
import book from "../assets/img/artius/logo_parts/book.png";
import pen from "../assets/img/artius/logo_parts/pen.png";
import tagline from "../assets/img/artius/logo_parts/tagline.png";

interface Props {
  className?: string;
}

// every part is a full size transparent layer, origin = center of the part (pivot for the animations)
// intro = how it comes in, idle = what it keeps doing after, delay in seconds
const parts = [
  { img: circlePink,     origin: "13% 38%",   intro: "pop",    idle: "float", delay: 0.05 },
  { img: quadBlue,       origin: "32% 29%",   intro: "pop",    idle: "float", delay: 0.12 },
  { img: quadGreen,      origin: "55% 40%",   intro: "pop",    idle: "float", delay: 0.2 },
  { img: triangleYellow, origin: "69% 23%",   intro: "pop",    idle: "float", delay: 0.28 },
  { img: circleBlue,     origin: "84% 30%",   intro: "pop",    idle: "float", delay: 0.34 },
  { img: triangleOrange, origin: "81% 9%",    intro: "pop",    idle: "float", delay: 0.4 },
  { img: brushStroke,    origin: "3% 11%",    intro: "paint",  idle: "",      delay: 1.15 },
  { img: letters,        origin: "50% 70%",   intro: "drop",   idle: "",      delay: 0.45 },
  { img: book,           origin: "50% 89%",   intro: "open",   idle: "",      delay: 0.7 },
  { img: pen,            origin: "55% 67%",   intro: "fall",   idle: "wobble", delay: 0.95 },
  { img: tagline,        origin: "50% 93%",   intro: "rise",   idle: "",      delay: 1.35 },
];

const ArtiusLogo = (props: Props) => {
  return (
    <div className={`relative aspect-[1114/667] ${props.className || ""}`}>
      {parts.map((part, i) => (
        <div
          key={i}
          className={`absolute inset-0 artius-logo-${part.intro}`}
          style={{ transformOrigin: part.origin, animationDelay: `${part.delay}s` }}
        >
          <img
            className={`w-full h-full ${part.idle ? `artius-logo-${part.idle}` : ""}`}
            style={{ transformOrigin: part.origin, animationDelay: `${-i * 0.7}s` }}
            src={part.img}
            alt={i === 7 ? "ARTIUS" : ""}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default ArtiusLogo;
