import React, {FC} from "react";
import HeaderProps from "./index.types"
import Typography from "@atoms/Typography";

const Header: FC<HeaderProps> = ({}) => {
    return <>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between items-center">

            </div>
            <div className="flex flex-row justify-between items-center">
                <Typography variant="label" color="neutral-1-color" className="pl-2.5">SKILLS</Typography>
                <Typography variant="label" color="neutral-1-color" className="pl-2.5">WORKS</Typography>
                <Typography variant="label" color="neutral-1-color" className="pl-2.5">ABOUT</Typography>
                <Typography variant="label" color="neutral-1-color" className="pl-2.5">CONTACT</Typography>
            </div>
        </div>
    </>
}

export default Header