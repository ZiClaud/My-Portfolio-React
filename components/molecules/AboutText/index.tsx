import React, {FC} from "react";
import AboutTextProps from "./index.types"
import Typography from "@atoms/Typography";
import LongDescription from "@molecules/LongDescription";

const AboutText: FC<AboutTextProps> = ({}) => {
    return <>
        <div className="laptop:w-[40vw]">
            <Typography variant="h4" color="neutral-1" bold={true} className="flex justify-center tablet:justify-start">
                A BIT ABOUT ME
            </Typography>

            <div>
                <LongDescription
                    variant="h3"
                    desc1="As a software developer, I am driven to create digital experiences that are both "
                    desc1bold="visually striking and intuitive to navigate. "
                    desc2="Besides programming, I am also deeply interested in "
                    desc2bold="design, music, and chess."
                />
            </div>
        </div>
    </>
}

export default AboutText