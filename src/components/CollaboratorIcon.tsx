//import React from 'react'

interface Props {
  img: string
  onClick: () => void
}

const CollaboratorIcon = (props: Props) => {
  return (
    <div
      className={`w-full max-w-[190px] h-[190px] cursor-pointer animate__animated animate__zoomIn animate__faster`}
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`      
      }}
      onClick={() => props.onClick()}
    >
    </div>
  );
};

export default CollaboratorIcon;
