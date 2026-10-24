//import React from 'react'

interface Props {
  Link: string,
  Icon: string
}

const SocialIcon = (props: Props) => {
  return (
    <a href={props.Link} target="_blank" className="z-10">
      <div className="w-[60px] h-[60px] xl:w-[min(9vh,97px)] xl:h-[min(9vh,97px)] m-2 xl:m-[min(1vh,11px)]
                      flex items-center justify-center bg-white rounded-2xl duration-100
                      drop-shadow-[0px_0px_5px_rgba(0,0,0,0.6)]
                      hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.8)] hover:scale-115">
        <img className="w-[60%]" src={props.Icon} loading="lazy" />
      </div>
    </a>
  )
}

export default SocialIcon