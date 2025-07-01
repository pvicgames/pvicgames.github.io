//import React from 'react'

interface Props {
  img: string
  onClick: () => void
}

const CollaboratorIcon = (props: Props) => {
  return (
    <div
      className={`w-full max-w-[190px] h-[190px] cursor-pointer`}
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: `cover`
      }}
      onClick={() => props.onClick()}
    >
    </div>
  );
};

export default CollaboratorIcon;
