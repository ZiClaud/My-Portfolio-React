import React, { FC } from "react";
import AllWorksPageProps from "./index.types";
import Typography from "@atoms/Typography";
import { AllWorks } from "@/database/fakeDB";
import Image from "next/image";
import Padding from "@atoms/Padding";
import WorkData from "@/basics/WorkData";

const AllWorksPage: FC<AllWorksPageProps> = ({}) => {
    const chunkWorks = (works: WorkData[], chunkSize: number) => {
        const chunkedArray = [];
        for (let i = 0; i < works.length; i += chunkSize) {
            chunkedArray.push(works.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    return (
        <>
            <div className="flex flex-col bg-black-background px-5 tablet:px-14 laptop:px-28">
                <div className="flex flex-col justify-between items-center">
                    <Typography variant="h1" color="neutral-1" bold={true}>
                        All of my Works
                    </Typography>
                    {chunkWorks(AllWorks, 3).map((chunk, index) => (
                        <div key={index} className="flex justify-center items-center space-x-10">
                            {chunk.map((work) => (
                                <div key={work.title}>
                                    <Typography variant="h3" color="neutral-1" bold={true}>
                                        {work.title}
                                    </Typography>
                                    <Image src={work.urlImage} alt={work.category} width={300} height={200} />
                                    <Padding />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllWorksPage;
