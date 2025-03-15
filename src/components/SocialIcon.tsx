//import React from 'react'

interface Props {
  Link: string,
  Icon: string
}

const SocialIcon = (props: Props) => {
  return (
    <a href={props.Link} target="_blank" className="z-10">
      <img className="w-[130px] rounded-2xl drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] duration-100
                      xl:ml-3 xl:mr-3
                      hover:drop-shadow-[0px_0px_10px_rgba(255,255,255,255)] hover:scale-115"
           src={props.Icon}/> 
    </a>
  )
}

export default SocialIcon