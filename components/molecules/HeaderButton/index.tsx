import React, {FC} from "react";
import HeaderButtonProps from "./index.types"
import Typography from "@atoms/Typography";

const HeaderButton: FC<HeaderButtonProps> = ({children, link}) => {
    return <>
        <a href={link}>
            <Typography variant="label" color="neutral-1" className="pl-8 hover:text-primary-color">{children}</Typography>
        </a>
    </>
}

export default HeaderButton