import React, {FC} from "react";
import AllWorksPageProps from "./index.types"
import Typography from "@atoms/Typography";
import {AllWorks} from "@/database/fakeDB";
import Image from "next/image";
import Padding from "@atoms/Padding";

const AllWorksPage: FC<AllWorksPageProps> = ({}) => {
    return <>
        <div className="flex flex-col bg-black-background px-5 tablet:px-14 laptop:px-28">
            <div className="flex flex-col justify-content-center items-center">
                <Typography variant="h1" color="neutral-1" bold={true}>All of my Works</Typography>
            </div>
            <div>
                {AllWorks.map((work) => {
                    return <>
                        <Typography variant="h3" color="neutral-1" bold={true}>{work.title}</Typography>
                        <Image src={work.urlImage} alt={work.category} width={300} height={200} />
                        <Padding />
                    </>;
                })}
            </div>
        </div>
    </>
}

export default AllWorksPage