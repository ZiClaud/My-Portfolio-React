'use client'

import React, {FC} from "react";
import HeaderProps from "./index.types"
import Image from "next/image";
import ZC from "@images/ZC_Logo.svg";
import HeaderButton from "@molecules/HeaderButton";
import HamburgerMenu from "@images/burger-menu.svg";

const {useState} = React;

const Header: FC<HeaderProps> = ({}) => {
    const [counter, setCounter] = useState(0);

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

        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </>
}

export default Header