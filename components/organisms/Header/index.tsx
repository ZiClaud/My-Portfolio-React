import React, {FC} from "react";
import HeaderProps from "./index.types"
import Typography from "@atoms/Typography";
import Image from "next/image";
import ZC from "@images/ZC_Logo.svg";
import HeaderButton from "@molecules/HeaderButton";

const Header: FC<HeaderProps> = ({}) => {
    return <>
        <div className="flex flex-row justify-between pt-8 bg-black-background">
            <div className="flex flex-row justify-between items-center">
                <Image src={ZC} alt="ZC" width="50" height="50"/>
                <Typography variant="label" color="neutral-1">EN</Typography>
            </div>
            <div className="flex flex-row justify-between items-center">
                <HeaderButton link="#">SKILLS</HeaderButton>
                <HeaderButton link="#">WORKS</HeaderButton>
                <HeaderButton link="#">ABOUT</HeaderButton>
                <HeaderButton link="#">CONTACT</HeaderButton>
            </div>
        </div>
    </>
}

export default Header