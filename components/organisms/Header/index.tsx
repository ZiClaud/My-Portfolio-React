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

    const scrollToSection = (ref: string) => {
        window.scrollTo({
            behavior: "smooth",
            top: document.getElementById(ref)?.offsetTop || 0,
        });
        setIsMenuOpen(false);
    };

    return <>
        <div className="flex flex-row justify-between pt-8 bg-black-background">
            <div className="flex flex-row justify-between items-center">
                <Image src={ZC} alt="ZC" width="48" height="48"/>
            </div>
            <div className="hidden tablet:flex flex-row justify-between items-center">
                <HeaderButton onClick={() => scrollToSection("skills-section")}>SKILLS</HeaderButton>
                <HeaderButton onClick={() => scrollToSection("works-section")}>WORKS</HeaderButton>
                <HeaderButton onClick={() => scrollToSection("about-section")}>ABOUT</HeaderButton>
                <HeaderButton onClick={() => scrollToSection("contact-section")}>CONTACT</HeaderButton>
            </div>
            <div className="flex tablet:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Image src={HamburgerMenu} alt={"-"} width={35} height={35}/>
                </button>
                {isMenuOpen && (
                    <div className="bg-black-background fixed inset-0 flex items-center justify-center z-50">
                        <div className="flex flex-col gap-4 text-white">
                            <HeaderButton onClick={() => scrollToSection("skills-section")}>SKILLS</HeaderButton>
                            <HeaderButton onClick={() => scrollToSection("works-section")}>WORKS</HeaderButton>
                            <HeaderButton onClick={() => scrollToSection("about-section")}>ABOUT</HeaderButton>
                            <HeaderButton onClick={() => scrollToSection("contact-section")}>CONTACT</HeaderButton>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default Header