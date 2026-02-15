import React, { FC } from "react"
import IconButtonProps from "./index.types"
import Image from "next/image"

// hover:invert-0?
const IconButton: FC<IconButtonProps> = ({ src, alt, href, rel }) => {
  return <>
    <a href={href} target="_blank" rel={rel}>
      <Image src={src} alt={alt} width={100} height={100}
             className="brightness-0 invert hover:scale-110 hover:filter-none transition" />
    </a>
  </>
}

export default IconButton