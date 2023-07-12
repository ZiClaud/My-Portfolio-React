import React, {FC} from "react";
import IconButtonProps from "./index.types"
import Image from "next/image";

const IconButton: FC<IconButtonProps> = ({src, alt, href}) => {
    return <>
        <a href={href} target="_blank">
            <Image src={src} alt={alt} width={100} height={100} className="hover:scale-110 hover:opacity-50"/>
        </a>
    </>
}

export default IconButton