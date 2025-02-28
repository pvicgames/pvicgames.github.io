//import React from 'react'

interface Props {
  onClick: () => void;
  text: string;
  img: string;
  color: string;
  position: string;
}

const CollaboratorRow = (props: Props) => {
  // onClick={() => setCollabTextVisible(true)}

  return (
    <div
      className={`relative p-3 flex items-center w-full ${
        props.position === "right"
          ? "justify-end"
          : props.position === "left"
          ? "justify-start"
          : ""
      } bg-${props.color} cursor-pointer`}
      onClick={() => props.onClick()}
    >
      <div
        className={`absolute inset-0 bg-cover md:bg-contain bg-no-repeat bg-${props.color} ${
          props.position === "right"
            ? "bg-left"
            : props.position === "left"
            ? "bg-right"
            : "bg-left"
        } opacity-50 
             hover:opacity-100 transform ease-linear duration-100`}
        style={{
          backgroundImage: `linear-gradient(to ${props.position}, transparent, var(--color-${props.color})), url(${props.img})`,
        }}
      ></div>

      <p
        className="relative font-adlib text-3xl xl:text-5xl pointer-events-none
                   drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)]"
      >
        {props.text}
      </p>
    </div>
  );
};

export default CollaboratorRow;
