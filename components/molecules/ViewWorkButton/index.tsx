'use client'

import React, {FC} from "react";
import ViewWorkButtonProps from "./index.types"
import Button from "@atoms/Button";

const ViewWorkButton: FC<ViewWorkButtonProps> = ({workData}) => {
    return <>
        <div className="flex flex-row justify-center items-center py-4">
            <Button text="VIEW WORK" link={`/works/${workData.linkName}`}/>
        </div>
    </>
}

export default ViewWorkButton