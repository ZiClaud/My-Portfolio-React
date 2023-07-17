'use client'

import React, {FC} from "react";
import HeaderProps from "./index.types"
import Image from "next/image";
import ZC from "@images/ZC_Logo.svg";
import HeaderButton from "@molecules/HeaderButton";
import HamburgerMenu from "@images/burger-menu.svg";

const {useState} = React;

const Header: FC<HeaderProps> = ({}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="flex tablet:hidden">
                    <Image src={HamburgerMenu} alt={"-"} width={35} height={35}/>
                </div>
            </button>
            {isMenuOpen && (
                <div className="tablet:hidden">
                    <div className="bg-black-background fixed inset-0 flex items-center justify-center z-50">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <div className="flex flex-col gap-4 text-white">
                                <HeaderButton link="#">SKILLS</HeaderButton>
                                <HeaderButton link="#">WORKS</HeaderButton>
                                <HeaderButton link="#">ABOUT</HeaderButton>
                                <HeaderButton link="#">CONTACT</HeaderButton>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    </>
}

export default Header