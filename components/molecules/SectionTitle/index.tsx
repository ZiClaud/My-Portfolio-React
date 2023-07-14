import React, {FC} from "react";
import SectionTitleProps from "./index.types"
import Typography from "@atoms/Typography";

const SectionTitle: FC<SectionTitleProps> = ({text1, text2}) => {
    return <>
        <div className="flex flex-row justify-center tablet:justify-start">
            <Typography variant="h2" color="neutral-2">{text1}&nbsp;</Typography>
            <Typography variant="h2" color="neutral-1" bold={true}>{text2}</Typography>
        </div>
    </>
}

export default SectionTitle