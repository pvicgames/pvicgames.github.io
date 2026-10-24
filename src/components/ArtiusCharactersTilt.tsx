import { useEffect, useRef, useState } from "react";

import pierre_capa from "../assets/img/artius/capa/pierre_capa.png";
import rene_capa from "../assets/img/artius/capa/rene_capa.png";
import guga_capa from "../assets/img/artius/capa/guga_capa.png";
import walter_capa from "../assets/img/artius/capa/walter_capa.png";
import tyler_capa from "../assets/img/artius/capa/tyler_capa.png";
import theo_capa from "../assets/img/artius/capa/theo_capa.png";
import pivolo_capa from "../assets/img/artius/capa/pivolo_capa.png";
import domnic_capa from "../assets/img/artius/capa/domnic_capa.png";
import criaturas_capa from "../assets/img/artius/capa/criaturas_capa.png";
import seguranca_capa from "../assets/img/artius/capa/seguranca_capa.png";

// size of the whole composition in px (measured with the 3d depth), and where rene (the tilt box) sits inside it,
// the stage gets scaled down to fit the page width
const STAGE_W = 1335;
const STAGE_H = 1400;
const OFFSET_X = 177;
const OFFSET_Y = 558;

// tilt in degrees at the edges, and how fast it catches up with the mouse (0-1 per frame)
const MAX_TILT = 12;
const EASE = 0.08;

const ArtiusCharactersTilt = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const observer = new ResizeObserver(() => setScale(box.clientWidth / STAGE_W));
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  // tilt follows the mouse over the whole group, eased every frame,
  // and sways slowly on its own when nobody is pointing at it (phones too)
  useEffect(() => {
    const box = boxRef.current;
    const tilt = tiltRef.current;
    if (!box || !tilt) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let pointing = false;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
      target.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
      pointing = true;
    };
    const onLeave = () => { pointing = false; };
    const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") pointing = false; };

    const loop = (time: number) => {
      const goalX = pointing ? target.x : Math.sin(time / 2400) * 0.35;
      const goalY = pointing ? target.y : Math.cos(time / 3100) * 0.25;
      current.x += (goalX - current.x) * EASE;
      current.y += (goalY - current.y) * EASE;
      tilt.style.transform = `perspective(1000px) rotateX(${current.y * MAX_TILT}deg) rotateY(${-current.x * MAX_TILT}deg)`;
      frame = requestAnimationFrame(loop);
    };

    // only animate while it's on screen
    const visible = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry.isIntersecting) frame = requestAnimationFrame(loop);
    });
    visible.observe(box);

    box.addEventListener("pointermove", onMove);
    box.addEventListener("pointerleave", onLeave);
    // on touch, lifting the finger or starting to scroll ends it too
    box.addEventListener("pointerup", onUp);
    box.addEventListener("pointercancel", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      visible.disconnect();
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("pointerup", onUp);
      box.removeEventListener("pointercancel", onLeave);
    };
  }, []);

  return (
    <div ref={boxRef} className="relative w-full touch-pan-y" style={{ height: STAGE_H * scale }}>
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
      >
        <div className="absolute" style={{ left: OFFSET_X, top: OFFSET_Y }}>
          <div ref={tiltRef} className="w-fit h-fit [transform-style:preserve-3d]" style={{ transform: "perspective(1000px)" }}>
            <img loading="lazy" className="relative w-[500px] translate-z-[20px]" src={rene_capa} />
            <img loading="lazy" className="absolute w-[250px] top-[-300px] left-[-60px]  translate-z-[20px]" src={tyler_capa} />
            <img loading="lazy" className="absolute w-[350px] top-[-500px] left-[400px]  translate-z-[40px]" src={theo_capa} />
            <img loading="lazy" className="absolute w-[370px] top-[-250px] left-[520px]  translate-z-[60px]" src={domnic_capa} />
            <img loading="lazy" className="absolute w-[650px] top-[-500px] left-[80px]   translate-z-[60px]" src={guga_capa} />
            <img loading="lazy" className="absolute w-[400px] top-[-150px] left-[-125px] translate-z-[100px]" src={seguranca_capa} />
            <img loading="lazy" className="absolute w-[470px] top-[90px]   left-[570px]  translate-z-[120px]" src={walter_capa} />
            <img loading="lazy" className="absolute w-[300px] top-[-100px] left-[450px]  translate-z-[100px]" src={pivolo_capa} />
            <img loading="lazy" className="absolute w-[370px] top-[300px]  left-[400px]  translate-z-[140px]" src={criaturas_capa} />
            <img loading="lazy" className="absolute w-[370px] top-[300px]  left-[90px]   translate-z-[200px]" src={pierre_capa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtiusCharactersTilt;
