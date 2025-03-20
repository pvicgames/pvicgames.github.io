//import React from 'react'

interface Props {
  img?: string;
  func?: () => void;
}

const ArtiusCharButton = (props: Props) => {
  return (
    <div className="flex-1
                    bg-no-repeat bg-contain bg-center p-5 m-1
                    hover:bg-white transition cursor-pointer"
        style={{backgroundImage: `url(${props.img})`}}
        onClick={() =>  props.func && props.func()}/>
  )
}

export default ArtiusCharButton