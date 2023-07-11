import React, {FC} from "react";
import SectionTitleProps from "./index.types"
import Typography from "@atoms/Typography";

const SectionTitle: FC<SectionTitleProps> = ({text1, text2}) => {
    return <>
        <div className="flex flex-row">
            <Typography variant="h3" color="neutral-2">{text1}&nbsp;</Typography>
            <Typography variant="h3" color="neutral-1">{text2}</Typography>
        </div>
    </>
}

export default SectionTitle