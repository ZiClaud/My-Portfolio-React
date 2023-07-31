'use client'

import React, {FC} from "react";
import WorkPageProps from "./index.types"
import Typography from "@atoms/Typography";
import Image from "next/image";

const WorkPage: FC<WorkPageProps> = ({workData}) => {
    return <>
        <Typography variant="h1" color="neutral-1" bold={true}>{workData.title}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.category}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.description}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.descriptionBold}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.id}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.descriptionLong1}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.descriptionLongBold1}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.descriptionLong2}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.descriptionLongBold2}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.link}</Typography>
        <Typography variant="h2" color="neutral-2">{workData.skills}</Typography>
        <Image src={workData.urlImage} alt={workData.title} width={300} height={200}/>
    </>
}

export default WorkPage