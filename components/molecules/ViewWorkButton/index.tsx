'use client'

import React, {FC} from "react";
import ViewWorkButtonProps from "./index.types"
import Button from "@atoms/Button";

const ViewWorkButton: FC<ViewWorkButtonProps> = ({
                                                     title,
                                                     skills,
                                                     descriptionLong1,
                                                     descriptionLongBold1,
                                                     descriptionLong2,
                                                     descriptionLongBold2,
                                                     urlAllImages
                                                 }) => {
    return <>
        <div className="flex flex-row justify-center items-center py-4">
            <Button text="VIEW WORK" onClick={() => {
            }}/>
        </div>
    </>
}

export default ViewWorkButton