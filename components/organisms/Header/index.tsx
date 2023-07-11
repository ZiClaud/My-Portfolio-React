import React, {FC} from "react";
import HeaderProps from "./index.types"
import Typography from "@atoms/Typography";
import Image from "next/image";
import ZC from "@images/ZC_Logo.svg";

const Header: FC<HeaderProps> = ({}) => {
    return <>
        <div className="flex flex-row justify-between pt-8">
            <div className="flex flex-row justify-between items-center">
                <Image src={ZC} alt="ZC" width="50" height="50"/>
                <Typography variant="label" color="neutral-1-color">EN</Typography>
            </div>
            <div className="flex flex-row justify-between items-center">
                <Typography variant="label" color="neutral-1-color" className="pl-8">SKILLS</Typography>
                <Typography variant="label" color="neutral-1-color" className="pl-8">WORKS</Typography>
                <Typography variant="label" color="neutral-1-color" className="pl-8">ABOUT</Typography>
                <Typography variant="label" color="neutral-1-color" className="pl-8">CONTACT</Typography>
            </div>
        </div>
    </>
}

export default Header