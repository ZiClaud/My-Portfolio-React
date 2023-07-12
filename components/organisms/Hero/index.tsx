import React, {FC} from "react";
import HeroProps from "./index.types"
import Typography from "@atoms/Typography";
import Header from "@organisms/Header";
import Image from "next/image";
import ArrowDown from "@images/arrow_down.svg";

const Hero: FC<HeroProps> = ({}) => {
    return <>
        <div className="flex flex-col min-h-screen justify-between">
            <Header/>
            <div className="flex flex-col justify-between items-center">
                <Typography variant="h1" color="neutral-1">Claudio Di Maio</Typography>
                <Typography variant="h1" color="neutral-2">Software Developer</Typography>
            </div>
            <div className="flex flex-col justify-between items-center">
                <Image src={ArrowDown} alt="v" width="50" height="50"/>
            </div>
        </div>
    </>
}

export default Hero