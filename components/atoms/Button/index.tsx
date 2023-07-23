import React, {FC} from "react";
import ButtonProps from "./index.types"
import Typography from "@atoms/Typography";
import Image from "next/image";
import RightArrow from "@images/arrow_right.svg";
import {Link} from "react-router-dom";

const Button: FC<ButtonProps> = ({text, link}) => {
    return <>
        <Link
            className="flex flex-row justify-center items-center bg-transparent hover:bg-primary-color hover:scale-110 py-2 px-4 border border-neutral-1 rounded-3xl transition"
            to={link}>
            <Typography variant={"button"} color="neutral-1" bold={true}>{text}</Typography>
            <Image src={RightArrow} alt={">"} width={25} height={25}/>
        </Link>
    </>
}

export default Button