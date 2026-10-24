//import React from 'react'

interface Props {
  className?: string; // mostly the text size, everything else scales with it (em)
}

// "The ArtiusPedia" in times new roman with the pvic shapes around it
const ArtiusPediaTitle = (props: Props) => {
  return (
    <div className={`relative inline-block font-times leading-none select-none ${props.className || ""}`}>
      {/* Shapes */}
      <span className="absolute -left-[0.25em] top-[0.15em] w-[0.9em] h-[0.9em] rounded-full bg-pvic-pink" />
      <span
        className="absolute left-[2.6em] -top-[0.35em] w-[0.8em] h-[0.7em] bg-pvic-yellow rotate-12"
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
      />
      <span className="absolute left-[3.9em] bottom-[-0.15em] w-[0.55em] h-[0.55em] bg-pvic-green -rotate-12" />
      <span className="absolute -right-[0.3em] top-[0.35em] w-[0.8em] h-[0.4em] rounded-t-full bg-pvic-blue rotate-[24deg]" />
      <span className="absolute right-[1.6em] -top-[0.2em] w-[0.3em] h-[0.3em] rounded-full bg-pvic-blue" />

      {/* Text */}
      <span className="relative block italic text-[0.38em] ml-[0.4em] -mb-[0.1em]">The</span>
      <span className="relative block font-normal tracking-tight drop-shadow-[0.04em_0.04em_0px_rgba(255,255,255,1)]">
        Artius<span className="italic text-pvic-pink">Pedia</span>
      </span>
    </div>
  );
};

export default ArtiusPediaTitle;
