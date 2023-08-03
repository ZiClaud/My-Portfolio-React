import React, {FC} from "react";
import CardProps from "./index.types"
import Typography from "@atoms/Typography";

const Card: FC<CardProps> = ({text}) => {
    return <>
        <div className="px-1 pt-2.5 pb-5">
            <div className="flex flex-col justify-center items-center bg-primary-color rounded-xl px-2 py-0.5">
                <Typography variant="h5" bold={true} color="neutral-1">{text}</Typography>
            </div>
        </div>
    </>
}

export default Card