import React, {FC} from "react";
import HeaderProps from "./index.types"
import Image from "next/image";
import ZC from "@images/ZC_Logo.svg";
import HeaderButton from "@molecules/HeaderButton";
import HamburgerMenu from "@images/burger-menu.svg";

const Header: FC<HeaderProps> = ({}) => {
    return <>
        <div className="flex flex-row justify-between pt-8 bg-black-background">
            <div className="flex flex-row justify-between items-center">
                <Image src={ZC} alt="ZC" width="48" height="48"/>
            </div>
            <div className="hidden tablet:flex flex-row justify-between items-center">
                <HeaderButton link="#">SKILLS</HeaderButton>
                <HeaderButton link="#">WORKS</HeaderButton>
                <HeaderButton link="#">ABOUT</HeaderButton>
                <HeaderButton link="#">CONTACT</HeaderButton>
            </div>
            <div className="flex tablet:hidden">
                <Image src={HamburgerMenu} alt={"-"} width={35} height={35}/>
            </div>
        </div>
    </>
}

export default Header