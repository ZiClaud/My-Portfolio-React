import React, {FC} from "react";
import ViewWorkButtonProps from "./index.types"
import Image from "next/image";
import RightArrow from "@images/arrow_right.svg"
import Typography from "@atoms/Typography";

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
            <button className="flex flex-row justify-center items-center bg-transparent hover:bg-primary-color py-2 px-4 border border-neutral-1 rounded-3xl transition">
                <Typography variant={"button"} color="neutral-1" bold={true}>VIEW WORK</Typography>
                <Image src={RightArrow} alt={">"} width={25} height={25}/>
            </button>
        </div>
    </>
}

export default ViewWorkButton