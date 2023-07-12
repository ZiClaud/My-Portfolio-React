import React, {FC} from "react";
import AboutTextProps from "./index.types"
import Typography from "@atoms/Typography";

const AboutText: FC<AboutTextProps> = ({}) => {
    return <>
        <div>
            <Typography variant="h4" color="neutral-1" bold={true}>A BIT ABOUT ME</Typography>

            <div>
                <Typography variant="h3" color="neutral-2" bold={false}>
                    As a software developer, I am driven to create digital experiences that are both&nbsp;
                </Typography>
                <Typography variant="h3" color="neutral-1" bold={true}>
                    visually striking and intuitive to navigate.&nbsp;
                </Typography>
                <Typography variant="h3" color="neutral-2" bold={false}>
                    Besides programming, I am also deeply interested in&nbsp;
                </Typography>
                <Typography variant="h3" color="neutral-1" bold={true}>
                    design, music, and chess.
                </Typography>
            </div>
        </div>
    </>
}

export default AboutText